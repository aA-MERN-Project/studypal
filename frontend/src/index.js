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

document.addEventListener("DOMContentLoaded", () => {
    // let store = configureStore({});
    let store;

    if(localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {session: {isAuthenticated: true, user: decodedUser}};
    
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

    }else{
        store = configureStore();
    }

    window.getState = store.getState

    const root = document.getElementById("root");

    //  ;
    ReactDOM.render(<Root store={store}/>, root);

    window.axios = axios;

    // TESTING APIS
    window.testId = "WavvLdfdP6g8aZTtbBQHTw";
  
    window.getYelpCafeById = getYelpCafeById
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//don't need
// serviceWorker.unregister();

//set axios on the window

window.axios=axios;

// TESTING APIS
window.filter = { term: 'starbucks'};
window.getCafes = getCafes;
window.getCafe = getCafe;
window.getYelpCafes = getYelpCafes;
