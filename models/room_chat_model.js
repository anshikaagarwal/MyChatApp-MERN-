const mongoose = require('mongoose');
const { Schema } = mongoose;

const chat = new Schema({
    room: String,
    sender_name: String,
    message: String,
    time: String
});

const room = new Schema({
    room_name: String,
    chats: [chat]
});

const Room = module.exports = mongoose.model('Room', room);

module.exports.getRoomChats = async (room) => {
    const res = await Room.findOne({ room_name: room });
    return res.chats;
}

module.exports.appendChat = async (room, chat) => {
    const res = await Room.findOne({ room_name: room });
    res.chats.push(chat);
    const result = await res.save();
}