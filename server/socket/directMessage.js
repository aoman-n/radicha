const Mongo = require('../mongo');
const mongo = new Mongo();

exports.send = async(messageData) => {
  const { partnerSocketId, text, username } = messageData;
  // const directMessageData = { messageObj: { type: 'incoming', text }, partnerSocketId: socket.id };
  io.to(partnerSocketId).emit('receive direct message', {
    text,
    username,
    partnerSocketId: socket.id
  });
}