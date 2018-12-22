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

// @MEMO
// username、userのsocket.idを保存するobj
let users = {};
let store = {};
// @MEMO
// generalチャンネル
let rooms = {
  general: {
    users: [],
    messages: [],
  }
};

io.on('connection', socket => {
  console.log('client connected');

  // roomへの入室
  socket.on('join', data => {
    console.log(data);
    const { userName, room } = data;
    users[userName] = socket.id;
    rooms[room].users.push(userName);
    console.dir(rooms[room]);
    socket.join(room);
    socket.username = userName;
    socket.room = room;
    socket.to(room).emit('user join', userName);
    socket.emit('initialize room data', rooms['general']);
  });

  // room内userへmessageをsend
  socket.on('chat message', msg => {
    console.log(msg);
    const { room } = socket;
    rooms.general.messages.push(msg);
    socket.to(room).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });

});

http.listen(config.http.port, () => {
  console.log('listening on: ' + config.http.port);
});