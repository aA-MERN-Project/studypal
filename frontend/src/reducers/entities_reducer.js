import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import cafesReducer from './cafes_reducer';
import filtersReducer from './filters_reducer';
import yelpCafeReducer from './yelp_cafe_reducer';
import currCafeReducer from './curr_cafe_reducer';
import cafeChoiceReducer from './cafe_choice_reducer';

const entitiesReducer = combineReducers({
    cafeChoices: cafeChoiceReducer,
    users: usersReducer,
    cafes: cafesReducer,
    currCafe: currCafeReducer,
    filters: filtersReducer,
    yelpCafe: yelpCafeReducer
});

export default entitiesReducer;

