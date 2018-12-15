// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const configHttp = require('./config').http;

// let data = [];

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', socket => {
//   console.log('a user connected');
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// http.listen(configHttp.port, () => {
//   console.log('listening on: ' + configHttp.port);
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('test')
  // socket.on('chat message', function(msg){
  //   io.emit('chat message', msg);
  // });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});