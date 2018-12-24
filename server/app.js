const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

app.disable("x-powered-by");
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
// ルーム内チャットデータを保持するobj
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
    const { username, roomname } = data;
    const userData = { id: socket.id, name: username };
    // 既にroomに入っていれば、socketから情報を削除し、退出メッセージを送信
    const { room } = socket;
    if (room) {
      console.log('ルームにジョイン中です');
      socket.to(room).emit('chat message', { name: '', text: `${username} さんが退出しました。` });
      socket.leave(room);
      delete socket.room;
      delete socket.username;
    }
    // roomにjoinする処理
    socket.join(roomname);
    socket.username = username;
    socket.room = roomname;
    // users[username] = socket.id;
    rooms[roomname].users.push(userData);
    socket.to(roomname).emit('user join', userData);
    socket.emit('initialize room data', rooms[roomname]);
    socket.emit('chat message', { name: '', text: `${username} として入室しました。` });
  });

  // room内userへmessageをsend
  socket.on('chat message', msg => {
    console.log(msg);
    const { room } = socket;
    rooms[room].messages.push(msg);
    socket.to(room).emit('chat message', msg);
  });

  socket.on('logout', () => {
    console.log('clientからlogoutを受信');
    logout(socket);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
    logout(socket);
  });

});

const logout = socket => {
  const { room, username, id } = socket;
  if (room) {
    delete socket.username;
    delete socket.room;
    socket.leave(room);
    const message = { name: '', text: `${username} さんが退出しました。` };
    socket.to(room).emit('chat message', message);
    socket.to(room).emit('leave user', id);
    rooms[room].users = rooms[room].users.filter(u => u.id !== id);
    socket.emit('clear socket', 'clear');
  }
}

http.listen(config.http.port, () => {
  console.log('listening on: ' + config.http.port);
});