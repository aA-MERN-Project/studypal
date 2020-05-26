import React from 'react';
import gif from './coffee-preloader.gif';
import './cafe.scss';
import RecommendModal from "../modal/recommend_modal";

const LoadingPage = () => (
    <div>
        <div className="gifImgDiv">
            <img src={gif}></img>
        </div>

        <RecommendModal></RecommendModal>
    </div>


);

export default LoadingPage;