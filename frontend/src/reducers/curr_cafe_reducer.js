import { RECEIVE_CURR_CAFE } from "../actions/cafe_actions";



const currCafeReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURR_CAFE:
            return action.cafe.data[0]
        default:
            return state;
    }
}

export default currCafeReducer;