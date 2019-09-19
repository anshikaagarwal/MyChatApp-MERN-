import axios from 'axios';
import { FETCH_USER, ADD_GROUPS, FETCH_CHATS } from './types.js'
export const fetch_users = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
};
export const post_signup = (data, history) => async dispatch => {
    console.log('signup data to be post=', data);
    const res = await axios.post("/auth/signup", data);
    history.push('/chat');
    if (res.data) {
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    }
};
export const post_login = (data, history) => async dispatch => {
    const res = await axios.post("/auth/login", data);
    history.push('/chat');
    if (res.data) {
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    }
};
export const add_group_list = () => async dispatch => {
    const res = await axios.get('/api/add_rooms');
    dispatch({
        type: ADD_GROUPS,
        payload: res.data
    });
};

export const fetch_chats = async (room) => {
    const res = await axios.get('/api/fetch_chats', {
        params: {
            room
        }
    });

    return res.data;
}



