import { RECEIVE_CURR_CAFE } from "../actions/cafe_actions";



const currCafeReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_CURR_CAFE:
            return action.cafe.data
        default:
            return state;
    }
}

export default currCafeReducer;