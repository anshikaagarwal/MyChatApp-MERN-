import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from '../header_folder/Header_chatbox'

class ChatBox extends Component {

    constructor() {
        super();
        this.username = null;
        this.path = null;
        this.chats = null;
        this.state = null;
        this.text_message = React.createRef();
        this.chat_box = React.createRef();
        this.send_btn = React.createRef();
        this.socket = null;
    }

    componentWillReceiveProps(props) {
        if (props.path === window.location.pathname.split('/').pop()) {
            this.socket = io('https://mygroupchatapp.herokuapp.com');
            this.socket.on('connect', () => {
                console.log('sockets connected');
                this.socket.emit('join', props.path, () => { });
            });
            this.username = props.username;
            this.path = props.path
            this.chats = props.chats;
            this.setState({ chats: props.chats });
        }
    }




    handleSocket = () => {
        this.socket.emit('send_message', this.text_message.current.value, this.path, this.username);
        this.socket.on('update_chat', (data) => {
            var chatState = this.state.chats;
            if (chatState[chatState.length - 1] != data.mssg) {
                chatState.push(data.mssg);
                this.setState({ chats: chatState });
            }
        })
    }

    update_chatbox = () => {
        if (this.path === window.location.pathname.split('/').pop()) {
            return (

                Array.prototype.map.call(this.state.chats, chat => {
                    return (
                        <div className="card" style={{ borderRadius: '5px', marginLeft: '10px', padding: '5px 10px 5px 10px', width: 'fit-content', height: 'fit-content' }}>
                            <div class='red-text text-darken-4' style={{ fontSize: '15px', fontWeight: '600' }}>{chat.sender_name}<span class='grey-text' style={{ marginLeft: '10px', fontSize: '10px', fontWeight: '600' }}>{chat.time}</span></div>
                            <div class='black-text'>{chat.message}</div>


                        </div>
                    )
                })
            )
        } else {
            return <div></div>
        }
    }
    render() {
        return (
            <div style={{ marginLeft: '-10px', marginRight: '-11px', fontFamily: 'cursive' }}>
                <Header />
                <div style={{ backgroundImage: "url('/images/whatsapp_background.png')", backgroundSize: 'cover' }}>
                    <div ref={this.chat_box} style={{ height: '500px', fontWeight: '400', fontSize: '25px', overflowY: 'scroll' }}>
                        {this.update_chatbox()}
                    </div>
                    <div className="card">

                        <div className="row"  >
                            <div className="col s10">
                                <div class="input-field" >
                                    <i class="material-icons prefix">mode_edit</i>
                                    <textarea ref={this.text_message} id="icon_prefix2" class="materialize-textarea"></textarea>
                                    <label for="icon_prefix2">Message</label>
                                </div>
                            </div>
                            <div className="col s2">
                                <div ref={this.send_btn} className="btn teal darken-4" onClick={this.handleSocket} style={{ marginBottom: '-30%' }}>
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
}


export default ChatBox;