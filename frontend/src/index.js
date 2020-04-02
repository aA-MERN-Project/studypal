import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import Root from "./components/root";
import configureStore from './store/store';
import './index.css'
import getYelpCafeById from './util/yelp_api';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from './util/session_api_util';
import {logout} from './actions/session_actions';

import { getUser } from './util/user_api_util'
// import { updateUserPreferences } from './util/session_api_util'
import { updateUserPreferences, login } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    // let store = configureStore({});
    let store;

    if(localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {session: {isAuthenticated: true, user: decodedUser}};
        
        // const client = Stitch.defaultAppClient;

        store = configureStore(preloadedState);
        //checking if jwt passed its configuration
        //getting it in seconds
        const currentTime = Date.now()/1000;
        //if decoded expiration time is less than currentTime
        if(decodedUser.exp < currentTime){
            //Logout the user and redirect to the login page
            store.dispatch(logout());
            window.location.href = 'login';
        }
        // client.auth.loginWithCredential(new AnonymousCredential());
    }else{
        store = configureStore();
    }

    // function initializeAndLogin() {
    //   const client = Stitch.defaultAppClient;
    //   client.auth.loginWithCredential(new AnonymousCredential())
    // }

    // window.onload = initializeAndLogin;

    window.store = store
    window.getState = store.getState

    const root = document.getElementById("root");

    //  ;
    ReactDOM.render(<Root store={store}/>, root);

    window.axios = axios;

    // TESTING APIS
    window.testId = "WavvLdfdP6g8aZTtbBQHTw";
  
    window.getYelpCafeById = getYelpCafeById

    window.updateUserPreferences = updateUserPreferences
    window.getUser = getUser
    window.login = login
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//don't need
// serviceWorker.unregister();

//set axios on the window


// TESTING APIS
