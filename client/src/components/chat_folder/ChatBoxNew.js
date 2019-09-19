import React, { useState, useCallback } from 'react';
import io from 'socket.io-client';
import Header from '../header_folder/Header_chatbox'

const ChatBox = ({ username, chats, path }) => {
    const [chatState, setChatState] = useState(chats);
    var chat_list = ['Hey Jaspreet,1 day to go...', 'love you loads', 'Hey Jaspreet,1 day to go...', 'love you loads', 'Hey Jaspreet,1 day to go...', 'love you loads', 'Hey Jaspreet,1 day to go...', 'love you loads', 'Hey Jaspreet,1 day to go...', 'love you loads', 'Hey Jaspreet,1 day to go...', 'love you loads'];
    const text_message = React.createRef();
    const chat_box = React.createRef();
    const send_btn = React.createRef();

    //-----------------socket programming----------------
    const socket = io('localhost:5000');
    socket.on('connect', () => {
        socket.emit('join', path, () => { });
        socket.on('connected_users', (users) => { });
    });

    const handleSocket = () => {
        socket.emit('send_message', text_message.current.value, path, username);
        socket.on('update_chat', (data) => {
            if (chats[chats.length - 1] != data.mssg) {
                chats.push(data);
                setChatState(chats);
            }
            // console.log('chats in chatbox new=', chats);
        })
    }

    const update_chatbox = () => {
        if (path === window.location.pathname.split('/').pop()) {
            console.log('chats recieved in chatbox=', chatState);
            return (
                chat_list.map(chat => {
                    return (
                        <div className="card" style={{ borderRadius: '5px', marginLeft: '10px', padding: '5px 10px 5px 10px', width: 'fit-content' }}>
                            {chat}
                        </div>
                    )
                })
            )
        } else {
            return <div></div>
        }
    }
    return (
        <div style={{ marginLeft: '-10px', marginRight: '-11px', fontFamily: 'cursive' }}>
            <Header />
            <div style={{ backgroundImage: "url('/images/whatsapp_background.png')", backgroundSize: 'cover' }}>
                <div ref={chat_box} style={{ height: '500px', fontWeight: '400', fontSize: '25px', overflowY: 'scroll' }}>
                    {update_chatbox()}
                </div>
                <div className="card">

                    <div className="row"  >
                        <div className="col s10">
                            <div class="input-field" >
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea ref={text_message} id="icon_prefix2" class="materialize-textarea"></textarea>
                                <label for="icon_prefix2">Message</label>
                            </div>
                        </div>
                        <div className="col s2">
                            <div ref={send_btn} className="btn teal darken-4" onClick={handleSocket} style={{ marginBottom: '-30%' }}>
                                send
                            <i class="material-icons right">send</i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default ChatBox;


app.post('/auth/signup', async (req, res) => {
    console.log('request recieved');
    const email = req.body.email;
    const username = req.body.username;
    const password1 = req.body.password;
    const password2 = req.body.password2;

    if (password1 == password2) {
        const user = await new User({ email, username, password: password1 });
        const result = await User.createUser(user);
        console.log('new user signed-up=', result);

    } else {
        res.send(null);
    }
}, passport.authenticate('local'));