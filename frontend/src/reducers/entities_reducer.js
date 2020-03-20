import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import cafesReducer from './cafes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cafes: cafesReducer
});

export default entitiesReducer;

