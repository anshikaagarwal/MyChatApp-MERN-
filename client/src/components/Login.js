import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { post_login } from '../actions/auth_actions';
import Header from './header_folder/Header_main';

const Login = ({ state, post_login, history }) => {
    const handle_submit = async (event) => {
        event.preventDefault();
        var data = {
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value
        }
        await post_login(data, history);

    };

    return (
        <div>
            <Header />
            <div className="card" style={{ width: '50%', marginLeft: '25%', marginTop: '10%' }} onSubmit={handle_submit}>
                <div className="card-content center">
                    <form style={{ alignContent: 'center' }}>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="text" placeholder="Username" name="username" />
                        <input type="text" placeholder="Password" name="password" />
                        <button type="submit" className='btn teal darken-2' style={{ width: '70%' }}><h5 style={{ marginTop: '2px' }}>LOGIN</h5></button>
                    </form>
                </div>
            </div >
        </div>
    )


}

export default connect(null, { post_login })(Login);
