import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//use axios to make all api request (instead of jquery) bc:
//can set default headers with every request
//will be very convenient for us in future
import axios from 'axios';


ReactDOM.render(<App />, document.getElementById('root'));

window.axios = axios;