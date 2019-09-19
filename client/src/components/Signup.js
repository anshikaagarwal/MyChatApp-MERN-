import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { post_signup } from '../actions/auth_actions'
import Header from './header_folder/Header_main';

const Signup = ({ post_signup, history }) => {

    const handle_submit = async (event) => {
        event.preventDefault();
        var data = {
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password1.value,
            password2: event.target.password2.value
        }
        console.log('history in signup=', history);
        await post_signup(data, history);

    };

    return (
        <div>
            <Header />
            <div className="card" style={{ width: '50%', marginLeft: '25%', marginTop: '10%' }} onSubmit={handle_submit}>
                <div className="card-content center">
                    <form>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="text" placeholder="Username" name="username" />
                        <input type="text" placeholder="Password" name="password1" />
                        <input type="text" placeholder="Re-write Password" name="password2" />
                        <button type="submit" className='btn teal darken-2' style={{ width: '70%' }}><h5 style={{ marginTop: '2px' }}>SIGNUP</h5></button>
                    </form>
                </div>
            </div >
        </div>
    )

}

export default connect(null, { post_signup })(Signup);
