const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// スキーマ
const User = new Schema({
  socket_id: String,
  name: { type: String, unique: true, max: 8 },
});

const Room = new Schema({
  name: { type: String, unique: true },
  users: [{ name: String, socket_id: String }],
});

const Message = new Schema({
  text: String,
  user: String,
  room_id: { type: Schema.Types.ObjectId, ref: 'Room' },
  createdDate : {type: Date, default: Date.now}
});

// MongoDBへの接続
mongoose.connect('mongodb://localhost/radicha', { useNewUrlParser: true });

// スキーマからモデルをコンパイルし、モデルをエクスポートする
exports.User = mongoose.model('users', User);
exports.Room = mongoose.model('rooms', Room);
exports.Message = mongoose.model('messages', Message);