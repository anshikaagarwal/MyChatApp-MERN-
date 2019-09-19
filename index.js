const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const connectedUsers = require('./helpers/connected_users');
const Room = require('./models/room_chat_model');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI);
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie]
    })
)

app.use(passport.initialize());
app.use(passport.session());



require('./routes/auth_route')(app);
require('./routes/chat_routes')(app);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('listening to port ', port);
})
const user = new connectedUsers();
var io = require('socket.io')(server);
io.set('origins', 'https://mygroupchatapp.herokuapp.com');
io.on('connect', (socket) => {
    socket.on('join', (room, callback) => {
        user.addUser('anshika', room);
        socket.join(room);
        socket.emit('connected_users', user.getUser(room));
        callback();
    })
    socket.on('send_message', (mssg, room, username) => {
        const t = new Date();
        console.log('time=', t.getHours().toString() + ':' + t.getMinutes().toString());
        const data = {
            room: room,
            sender_name: username,
            message: mssg,
            time: t.getHours().toString() + ':' + t.getMinutes().toString()
        }
        Room.appendChat(room, data);
        io.to(room).emit('update_chat', {
            mssg: data,
        });
    })
})