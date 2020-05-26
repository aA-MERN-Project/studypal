import { RECEIVE_CAFES, 
    RECEIVE_YELP_CAFE, 
    START_LOADING_FILTERED_CAFES, 
    START_LOADING_SINGLE_CAFE, STOP_LOADER } from '../actions/cafe_actions';

import { START_LOADING_LOGIN, RECEIVE_CURRENT_USER, RECEIVE_FAVORITES, START_LOADING_FAVORITE_CAFES } from '../actions/session_actions'

const initialState = {
    indexLoading: false,
    detailLoading: false,
    loginLoading: false,
}


const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case STOP_LOADER:
            return Object.assign({}, state, { indexLoading: false });
        case RECEIVE_CAFES:
            return Object.assign({}, state, { indexLoading: false });
        case RECEIVE_YELP_CAFE:
            return Object.assign({}, state, { indexLoading: false });
        case RECEIVE_FAVORITES:
            return Object.assign({}, state, { favLoading: false});
        case START_LOADING_FILTERED_CAFES:
            return Object.assign({}, state, { indexLoading: true});
        case START_LOADING_SINGLE_CAFE:
            return Object.assign({}, state, { detailLoading: true});
        case START_LOADING_FAVORITE_CAFES:
            return Object.assign({}, state, { favLoading: true });
        default:
        return state;
    }

}

export default loadingReducer;