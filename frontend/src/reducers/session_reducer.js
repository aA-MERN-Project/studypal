import { RECEIVE_PREFERENCES ,RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN } from '../actions/session_actions'

const initialState = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = initialState, action) => {
    // debugger
    switch(action.type){
        case RECEIVE_CURRENT_USER:
         
          return{
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case LOGOUT_CURRENT_USER:
             
            return{
                isAuthenticated: false,
                user:undefined
            };
        case RECEIVE_USER_SIGN_IN:
            //  ;
            return{
                ...state,
                isSignedIn: true,
                user: action.currentUser.data
            };
        case RECEIVE_PREFERENCES:
            return Object.assign({}, state, { preferences: action.preferences.data })
        default: 
            return state;
    }
};


//Wilson's code
// const sessionReducer = (state = { id: null }, action) => {
//     Object.freeze(state)
//     let newState = Object.assign({}, state)
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             newState.id = action.currentUser.id;
//             return newState;
//         case LOGOUT_CURRENT_USER:
//             // return{ isAuthenticated: false, user: undefined};
//             newState.id = null;
//             return newState;
//         default:
//             return state;
//     }
// }

export default sessionReducer;