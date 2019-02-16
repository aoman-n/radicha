const Mongo = require('../mongo');
const mongo = new Mongo();
const app = require('./app');
const directMessage = require('./directMessage');
const room = require('./room');

module.exports = () => {

  io.on('connection', socket => {
    console.log('client connected');
    global.socket = socket;

    // app
    socket.on('login', app.login);
    socket.on('logout', app.logout);
    socket.on('disconnect', app.disconnect);

    // room
    socket.on('create room', room.create);
    socket.on('join', room.join);
    socket.on('chat message', room.message);
    socket.on('remove room', room.remove);
    socket.on('leave the room', room.leave);

    // directMessage
    socket.on('send direct message', directMessage.send)

  });
}