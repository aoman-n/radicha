const model = require('./model');

class Mongo {

  constructor() {
    this.User = model.User;
    this.Room = model.Room;
    this.Message = model.Message;
  }

  async getRoomList() {
    const rooms = await this.Room.find({}, { _id: 0, 'name': 1 });
    return rooms.map(room => room.name);
  }

  async createRoom(name) {
    const room = new this.Room({
      name,
      users: [],
    })
    return room.save();
  }

  async addUser(userData) {
    const user = new this.User(userData);
    return await user.save();
  }

  async joinRoom(userData, roomname) {
    const roomData = await this.Room.findOne({ name: roomname });
    roomData.users.push(userData);
    return await roomData.save();
  }

  async fetchMessages(roomId) {
    return await this.Message.find({ room_id: roomId });
  }

  async addMessage(roomname, user, text) {
    const currentRoom = await this.Room.findOne({ name: roomname });
    const message = new this.Message({
      text,
      user,
      room_id: currentRoom._id
    })
    return await message.save();
  }

  async leaveRoom(username, roomname) {
    const roomData = await this.Room.findOne({ name: roomname });
    roomData.users.some((v, i) => {
      if (v.name === username) roomData.users.splice(i, 1);
    });
    return await roomData.save();
  }

  async removeUser(username) {
    return await this.User.deleteOne({ name: username });
  }

  async removeRoom(roomname) {
    return await this.Room.deleteOne({ name: roomname });
  }

}

module.exports = Mongo;