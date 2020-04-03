import {
    RECEIVE_YELP_CAFE,
} from '../actions/cafe_actions';


const yelpCafeReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_YELP_CAFE:
            return action.cafe;
        default:
            return state;
    }
}


export default yelpCafeReducer;