import { RECEIVE_CAFES, RECEIVE_CAFE, RECEIVE_CLEAR_CAFES, REROLL_CAFES } from '../actions/cafe_actions';


const cafesReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    
     

    switch (action.type) {
        case RECEIVE_CAFES:
            return action.cafes.data
        case REROLL_CAFES:
            return action.cafes
        case RECEIVE_CAFE:
            const cafe = action.cafe.data
            return Object.assign({}, state, cafe)
        case RECEIVE_CLEAR_CAFES:
            return {}
        default:
            return state;
    }
}


export default cafesReducer;