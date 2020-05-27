import {
    RECEIVE_CAFE_HOUR_CHOICES
} from '../actions/cafe_actions';


const cafesReducer = (state = {}, action) => {
    Object.freeze(state);


    switch (action.type) {
        case RECEIVE_CAFE_HOUR_CHOICES:
            return action.cafes
        default:
            return state;
    }
}


export default cafesReducer;