import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';


// const persistConfig = {
//     key:'root',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default(preloadedState ={}) => {
//     let store = createStore(
//         persistedReducer,
//         preloadedState,
//         applyMiddleware(thunk, logger)
//     );
//     let persistor = persistStore(store);
//     return {store, persistor};

// } 




const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;