import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import cafesReducer from './cafes_reducer';
import filtersReducer from './filters_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cafes: cafesReducer,
    filters: filtersReducer,
});

export default entitiesReducer;

