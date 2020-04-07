import {
    RECEIVE_YELP_CAFE, RECEIVE_CLEAR_CAFES
} from '../actions/cafe_actions';


const yelpCafeReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    debugger
    switch (action.type) {
        case RECEIVE_YELP_CAFE:
            return action.cafe;
        case RECEIVE_CLEAR_CAFES:
            return {};
        default:
            return state;
    }
}


export default yelpCafeReducer;