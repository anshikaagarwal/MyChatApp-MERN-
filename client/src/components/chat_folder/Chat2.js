import React, { Component } from 'react';
import ContactList from './ContactList'
import ChatBox from './ChatBox';
import axios from 'axios';
import { connect } from 'react-redux';

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            path: window.location.pathname.split('/').pop(),
            chats: 'hello'
        }
    }

    async componentWillReceiveProps(props) {
        const res = await axios.get('/api/fetch_chats', {
            params: {
                room: props.path
            }
        });
        this.setState({ chats: res.data, path: props.path });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 l3" style={{ position: 'fixed' }}>
                    <ContactList />

                </div>
                <div className="col s12 l9 offset-l3" style={{ position: 'fixed', borderLeft: '1px solid grey' }}>
                    <ChatBox
                        username={this.props.username}
                        chats={this.state.chats}
                        path={this.state.path}
                    />
                </div>
            </div >

        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { username: (auth) ? auth.username : null };

}
export default connect(mapStateToProps)(Chat);

