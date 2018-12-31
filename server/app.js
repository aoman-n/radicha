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
  // socket.on('login', async(username) => {
  //   const userData = { socket_id: socket.id, name: username };
  //   await mongo.addUser(userData)
  // });

  socket.on('create room', async(name) => {
    const room = await mongo.createRoom(name);
    io.emit('add room', room.name);
  })

  // roomへの入室
  socket.on('join', async(data) => {

    const { username, roomname } = data;
    const userData = { socket_id: socket.id, name: username };

    const { room, id } = socket;
    if (room) {
      socket.to(room).emit('chat message', { user: '', text: `${username} さんが退出しました。` });
      socket.to(room).emit('leave user', id);
      socket.leave(room);
      const roomData = await mongo.leaveRoom(username, room);
      delete socket.room;
      delete socket.username;
    }
    socket.join(roomname);
    socket.username = username;
    socket.room = roomname;
    const roomData = await mongo.joinRoom(userData, roomname)
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

  socket.on('logout', () => {
    logout(socket);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
    logout(socket);
  });

});

const logout = async(socket) => {
  const { room, username, id } = socket;
  if (room) {
    delete socket.username;
    delete socket.room;
    socket.leave(room);
    await mongo.leaveRoom(username, room);
    const message = { user: '', text: `${username} さんが退出しました。` };
    socket.to(room).emit('chat message', message);
    socket.to(room).emit('leave user', id);
    socket.emit('clear socket', 'clear');
  }
}

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