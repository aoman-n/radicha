const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let users = [];
let messages = [];
let store = {};
// @MEMO
// generalチャンネル
let general = {
  users: [],
  messages: [
    { name: 'aoba', text: 'こんにちは' }
  ],
};

io.on('connection', socket => {
  console.log('client connected');
  // roomへの入室
  socket.on('join', data => {
    console.log(data);
    const { userName, room } = data;
    usrobj = {
      'room': room,
      'name': userName,
    };
    store[socket.id] = usrobj;
    socket.join(room);
    socket.username = userName;
    socket.room = room;
    general.users.push = userName;
    io.to(room).emit('chat message', { name: '', text: `${userName}さんが入室しました` });
    // io.to(socket.id).emit('chat message', { name: 'system', text: 'プライベートメッセージ' });
  });
  // room内userへmessageをsend
  socket.on('chat message', msg => {
    console.log(msg);
    // io.to(store[socket.id].room).emit('chat message', msg);
    // socket.broadcast.emit('chat message', msg);
    const { room, username } = socket;
    const obj = { name: username, text: msg };
    general.messages.push(obj);
    io.in(room).emit('chat message', obj);
    // socket.broadcast.to(room).emit('chat message', obj);
  });
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

http.listen(config.http.port, () => {
  console.log('listening on: ' + config.http.port);
});