import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import axios from 'axios';
import Root from "./components/root";
import configureStore from './store/store';
import './index.css';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from './util/session_api_util';
import {logout} from './actions/session_actions';
// import {updateProfile, getUser} from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if(sessionStorage.jwtToken){
        setAuthToken(sessionStorage.jwtToken);
        const decodedUser = jwt_decode(sessionStorage.jwtToken);
        const preloadedState = {session: {isAuthenticated: true, user: decodedUser}};
    
        store = configureStore(preloadedState);
        const currentTime = Date.now()/1000;

        if(decodedUser.exp < currentTime){
            store.dispatch(logout());
            window.location.href = 'login';
        }

    }else{
        store = configureStore();
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

    if (process.env.NODE_ENV !== "production") {
        window.getState = store.getState


    }



  
})
