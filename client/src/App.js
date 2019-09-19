import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Chat1 from './components/chat_folder/Chat1';
import Chat2 from './components/chat_folder/Chat2';
import { connect } from 'react-redux';
import { fetch_users } from './actions/auth_actions';

class App extends Component {
  componentDidMount() {
    this.props.fetch_users();
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/chat' component={Chat1} />
        <Route path='/chatbox' component={() => <Chat2 path={window.location.pathname.split('/').pop()} />} />
      </BrowserRouter>
    )
  }
}

export default connect(null, { fetch_users })(App);