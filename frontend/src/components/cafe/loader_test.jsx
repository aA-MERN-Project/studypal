import React from 'react';
import gif from './coffee-preloader.gif';
import './cafe.scss';
import RecommendModal from "../modal/recommend_modal";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updateFavorites } from "../../actions/session_actions";
import { fetchCurrCafe, fetchRecommended, rerollCafes, recommendLoader } from "../../actions/cafe_actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const mapStateToProps = state => {
    return {
        user: state.session.user,
        favorites: state.session.favorites,
        modal: state.modal.modal,
        data: state.modal.data,
        yelpCafe: state.entities.yelpCafe,
        currCafe: state.entities.currCafe,
        cafeChoices: state.entities.cafeChoices,
        filters: state.entities.filters,

    };
};


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
        fetchCurrCafe: (id) => dispatch(fetchCurrCafe(id)),
        rerollCafes: (cafes) => dispatch(rerollCafes(cafes)),
        fetchRecommended: (id) => dispatch(fetchRecommended(id)),
        recommendLoader: () => dispatch(recommendLoader()),
    };
};



function LoadingPage(props) {

    const defaultLoading = (

        <div className="gifImgDiv">
            <img src={gif}></img>
        </div>

    )


    // Conditional if there are no other choices
    let cafeChoices = props.cafeChoices;
    let isChoices = false;

    for (const choice in cafeChoices) {
        if (cafeChoices[choice].length > 0) isChoices = true;
    }

    // Find next best choice

    let nextBestChoice = 0;
    for (const choice in cafeChoices) {
        if (cafeChoices[choice].length > 0 && choice > nextBestChoice) nextBestChoice = choice;
    }

    debugger

    const noCafesAtAll = (
        <div className="gifImgDiv">
            <div>Oh no! Your search came up empty.</div>
            <div>
                Would you like us to fill your results with some StudyPal favorites?
                (Recommended)
        </div>

            <img src={gif}></img>

            <div className="loading-b-div">
                <button
                    className="loading-yes"
                    onClick={() => {
                        props.fetchRecommended("5ecd46d2a18efe02cc5d14f2");
                        props.closeModal();
                    }}
                >
                    Yes
                </button>
                <button
                    className="loading-no"
                    onClick={() => {
                        props.history.push(`/`);
                        props.closeModal();
                    }}
                >
                    No
          </button>
            </div>
        </div>
    );

    const cafeBestChoice = (
        <div className="gifImgDiv">
            <div>
                We could not find cafes open for&nbsp;3 hours
          </div>
            <div>
                However, we've found other cafes that are open for {
                    2
                }{" "}
            hours.

          </div>
            <img src={gif}></img>

            <div className="loading-b-div" >
                <button className="loading-yes"
                    onClick={() => {
                        props.rerollCafes(cafeChoices[nextBestChoice]);
                        props.recommendLoader();
                        props.closeModal();
                    }}
                >
                    Take me there!
                </button>
                <button className="loading-no"
                    onClick={() => {
                        props.history.push(`/`);
                        props.closeModal();
                    }}
                >
                    Go back to homepage
                </button>
            </div>

        </div>


    );

    const recommendLoading = (
        <div>
            {isChoices ? cafeBestChoice : noCafesAtAll}
        </div>

    )

        
    return (

        // <div>
        //    {defaultLoading}
        // </div>

    

        // <div>
        //     {cafeBestChoice}
        // </div>


        <div>
            {noCafesAtAll}
        </div>

    )


};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoadingPage));