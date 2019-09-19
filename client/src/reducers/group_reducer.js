import { ADD_GROUPS } from '../actions/types.js'

export default (state = null, action) => {

    switch (action.type) {
        case ADD_GROUPS:
            return action.payload;
        default:
            return state;
    }
}