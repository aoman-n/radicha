const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const config = require('./config');
const Mongo = require('./mongo');
const mongo = new Mongo();
const routes = require('./routes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});
app.disable("x-powered-by");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes);

io.on('connection', socket => {
  console.log('client connected');

  // appへログイン
  socket.on('login', async(username) => {
    socket.username = username;
    const userData = { socket_id: socket.id, name: username };
    await mongo.addUser(userData);
  });

  socket.on('create room', async(roomname) => {
    const room = await mongo.createRoom(roomname, socket.username);
    io.emit('add room', room.name);
    socket.emit('created room', room.name);
  })

  // roomへの入室
  socket.on('join', async(data) => {

    const { username, roomname } = data;
    const userData = { socket_id: socket.id, name: username };

    const existRoom = await mongo.findRoom(roomname);
    if (existRoom === null) {
      socket.emit('not found room');
      return;
    }

    const { room, id } = socket;
    if (room) {
      socket.to(room).emit('chat message', { user: '', text: `${username} さんが退出しました。` });
      socket.to(room).emit('leave user', id);
      socket.leave(room);
      await runLeaveRoom(username, room);
      delete socket.room;
      delete socket.username;
    }
    socket.join(roomname);
    socket.username = username;
    socket.room = roomname;
    await mongo.joinRoom(username, roomname);
    const roomData = await mongo.fetchRoomData(roomname);
    const messages = await mongo.fetchMessages(roomData._id);
    socket.to(roomname).emit('user join', userData);
    socket.emit('initialize room data', { users: roomData.users, messages });
    socket.emit('chat message', { user: '', text: `${username} として入室しました。` });
  });

  socket.on('chat message', async(text) => {
    const { username, room } = socket;
    await mongo.addMessage(room, username, text);
    const msg = { user: username, text }
    socket.to(room).emit('chat message', msg);
  });

  socket.on('remove room', async(roomname) => {
    // ルームマスターであるかsocket_idを使ってチェック
    const roomData = await mongo.fetchRoomData(roomname);
    if (roomData.users[0].socket_id === socket.id) {
      await mongo.removeRoom(roomname);
    }
    io.in(roomname).emit('eject from room');
    io.emit('removed room', roomname);
  });

  socket.on('leave the room', async() => {
    const { room } = socket;
    socket.leave(room);
    delete socket.room;
  });

  socket.on('logout', () => {
    console.log('logout');
    logout(socket);
  });

  socket.on('send direct message', async(messageData) => {
    const { partnerSocketId, text, username } = messageData;
    // const directMessageData = { messageObj: { type: 'incoming', text }, partnerSocketId: socket.id };
    io.to(partnerSocketId).emit('receive direct message', {
      text,
      username,
      partnerSocketId: socket.id
    });
  })

  socket.on('disconnect', () => {
    console.log('client disconnected');
    logout(socket);
  });

  const logout = async(socket) => {
    const { room, username, id } = socket;
    if (room) {
      delete socket.username;
      delete socket.room;
      socket.leave(room);
      await runLeaveRoom(username, room);
      const message = { user: '', text: `${username} さんが退出しました。` };
      socket.to(room).emit('chat message', message);
      socket.to(room).emit('leave user', id);
      socket.emit('clear socket', 'clear');
    }
    await mongo.removeUser(username);
  }

  const runLeaveRoom = async(username, room) => {
    const roomData = await mongo.leaveRoom(username, room);
    if (roomData.users.length === 0) {
      await mongo.removeRoom(room);
      io.emit('removed room', room);
    }
  }

});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: 'Something failed', err });
});

http.listen(config.http.port, () => {
  console.log('listening on: ' + config.http.port);
});