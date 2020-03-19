import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from './store/store';
import getCafes from './util/yelp_api';
import './index.css'


// ReactDOM.render(<Root />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();

    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store} />, root);


    // TESTING APIS
    window.filter = { term: 'starbucks'}
    window.getCafes = getCafes;
})