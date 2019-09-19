import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard';
import Chat1 from './Chat1';

const ChatMain = ({ auth }) => {
    if (auth == null) {
        return <div></div>
    } else if (auth == false) {
        return <Dashboard />
    } else {
        return <Chat1 />
    }

};

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(ChatMain);