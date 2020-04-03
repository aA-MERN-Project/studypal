import { RECEIVE_CAFES, 
    RECEIVE_YELP_CAFE, 
    START_LOADING_FILTERED_CAFES, 
    START_LOADING_SINGLE_CAFE } from '../actions/cafe_actions';
import { START_LOADING_LOGIN, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const initialState = {
    indexLoading: false,
    detailLoading: false,
    loginLoading: false,
}


const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_CURRENT_USER: 
        //     return Object.assign({}, state, { loginLoading: false });
        case RECEIVE_CAFES:
            return Object.assign({}, state, { indexLoading: false});
        case RECEIVE_YELP_CAFE:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_FILTERED_CAFES:
            return Object.assign({}, state, { indexLoading: true});
        case START_LOADING_SINGLE_CAFE:
            return Object.assign({}, state, { detailLoading: true});
        // case START_LOADING_LOGIN:
        //     return Object.assign({}, state, { loginLoading: true })
        default:
        return state;
    }

}

export default loadingReducer;