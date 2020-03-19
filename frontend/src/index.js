import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from './store/store';
import getYelpCafes from './util/yelp_api';

import {getCafes, getCafe} from './util/cafe_api_util';


// ReactDOM.render(<Root />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", () => {
    // let store = configureStore({});

    const root = document.getElementById("root");

    // ReactDOM.render(<Root store={store} />, root);


    // TESTING APIS
    window.filter = { term: 'starbucks'}
    window.getCafes = getCafes;
    window.getCafe = getCafe;
    window.getYelpCafes = getYelpCafes;
})