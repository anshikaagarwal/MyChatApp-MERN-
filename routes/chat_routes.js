const Room = require('../models/room_chat_model');
const mongoose = require('mongoose');
module.exports = (app) => {
    app.get('/api/add_rooms', (req, res) => {
        const rooms = [
            'group1',
            'group2',
            'group3',
            'group4',
            'group5',
            'group6',
            'group7',
            'group8',
            'group9',
            'group10',
            'group11',
            'group12',
            'group13',
            'group14',
            'group15',
            'group16',
        ];
        Room.collection.drop();
        rooms.forEach(async room => {
            const res = await new Room({
                room_name: room,
                chat: []
            })
            await res.save();

        })

        Room.find({ room_name: 'group16' }).then(res => console.log('res rooms lists=', res));
        res.send(rooms);

    });

    app.get('/api/fetch_chats', async (req, res) => {
        const chat = await Room.getRoomChats(req.query.room);
        res.send(chat);
    })
}