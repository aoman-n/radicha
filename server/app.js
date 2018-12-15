const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

let data = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('client connected');
  socket.on('message', msg => {
    console.log(msg);
    io.emit('message', msg);
  });
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

http.listen(config.http.port, () => {
  console.log('listening on: ' + config.http.port);
});