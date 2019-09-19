import { FETCH_CHATS } from '../actions/types.js'

export default (state = null, action) => {

    switch (action.type) {
        case FETCH_CHATS:
            return action.payload;
        default:
            return state;
    }
}