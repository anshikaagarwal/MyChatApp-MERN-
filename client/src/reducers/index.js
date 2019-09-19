import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import group_reducer from './group_reducer';
import chat_reducer from './chat_reducer'
export default combineReducers({
    auth: auth_reducer,
    group_list: group_reducer,
    chats: chat_reducer
});