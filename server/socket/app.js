const Mongo = require('../mongo');
const mongo = new Mongo();
const util = require('./util');

exports.login = async(username) => {
  console.log('login emitを受信しました');
  socket.username = username;
  const userData = { socket_id: socket.id, name: username };
  try {
    await mongo.addUser(userData);
    console.log('login success');
    socket.emit('login succeed');
  } catch(e) {
    console.log(e);
    console.log('login error');
    socket.emit('login failed');
  }
}

exports.logout = () => {
  console.log('logout');
  util.logout(socket);
}

exports.disconnect = () => {
  console.log('client disconnected');
  util.logout(socket);
}
