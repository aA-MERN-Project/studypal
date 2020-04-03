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
import {updateProfile, getUser} from './util/user_api_util';


// function saveToLocalStorage(state){
//     //wrap because won't save to localStorage is private mode
//         try{
//             const serializedState= JSON.stringify(state)
//             //give key state
//             localStorage.setItem('state',serializedState)
    
//         }catch(e){
//             console.log(e);
//         }
//     }

// function loadFromLocalStorage(){
//     try{
//         const serializedState = localStorage.getItem('state')
//         if(serializedState === null)return undefined;
//         return JSON.parse(serializedState)
//     }catch(e){
//         console.log(e);
//         return undefined;
//     }
// }


document.addEventListener("DOMContentLoaded", () => {
    // let store = configureStore({});
    let store;
    // const persistedState = loadFromLocalStorage();

    if(localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {session: {isAuthenticated: true, user: decodedUser}};
    
        store = configureStore(preloadedState);
        // store = configureStore(persistedState);
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
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

  
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//don't need
// serviceWorker.unregister();

//set axios on the window


// TESTING APIS
