import { RECEIVE_CAFES, 
    RECEIVE_YELP_CAFE, 
    START_LOADING_FILTERED_CAFES, 
    START_LOADING_SINGLE_CAFE } from '../actions/cafe_actions';


const initialState = {
    indexLoading: false,
    detailLoading: false,
}


const loadingReducer = (state = initialState, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CAFES:
            return Object.assign({}, state, { indexLoading: false});
        case RECEIVE_YELP_CAFE:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_FILTERED_CAFES:
            return Object.assign({}, state, { indexLoading: true});
        case START_LOADING_SINGLE_CAFE:
            return Object.assign({}, state, { detailLoading: true});
        default:
            return state;
    }

}

export default loadingReducer;