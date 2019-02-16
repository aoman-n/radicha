const Mongo = require('../mongo');
const mongo = new Mongo();
const util = require('./util');

exports.login = async(username) => {
  socket.username = username;
  const userData = { socket_id: socket.id, name: username };
  await mongo.addUser(userData);
}

exports.logout = () => {
  console.log('logout');
  util.logout(socket);
}

exports.disconnect = () => {
  console.log('client disconnected');
  util.logout(socket);
}

