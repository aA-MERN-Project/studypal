import React from 'react';
import gif from './coffee-preloader.gif';
import './cafe.scss';
import Modal from "../modal/modal_container";

const LoadingPage = () => (

    <div className="gifImgDiv">
        <img src={gif}></img>
        <Modal></Modal>
    </div>
);

export default LoadingPage;