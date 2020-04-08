import React from 'react';
import gif from './coffee-preloader.gif';
import './cafe.scss';

const LoadingPage = () => (

    <div className="gifImgDiv">
        <img src={gif}></img>
    </div>
);

export default LoadingPage;