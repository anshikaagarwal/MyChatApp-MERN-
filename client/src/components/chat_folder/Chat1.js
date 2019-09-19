import React from 'react';
import ContactList from './ContactList'
import ChatBox from './ChatBox';
import Dashboard from '../Dashboard'

const Chat = () => {
    return (
        <div className="row" style={{ position: 'fixed' }} >
            <div className="col s12 l3" style={{ position: 'fixed' }}>
                <ContactList />
            </div>

            <div className="col s12 l9 offset-l3" style={{ position: 'fixed' }}>
                <Dashboard />
            </div>

        </div >

    )
}

export default Chat;
