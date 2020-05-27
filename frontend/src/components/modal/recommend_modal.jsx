import React from "react";
import "./photo_banner.scss";
import "./recommend_modal.scss";
import { useState } from 'react';    
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from "../../actions/modal_actions";
import { updateFavorites } from "../../actions/session_actions";
import { fetchCurrCafe, fetchRecommended } from "../../actions/cafe_actions"
import gif from '../cafe/coffee-preloader.gif';
import { openPopUp } from '../../actions/pop_up_actions' 

const mapStateToProps = state => {
    return {
        user: state.session.user,
        favorites: state.session.favorites,
        modal: state.modal.modal,
        data: state.modal.data,
        yelpCafe: state.entities.yelpCafe,
        currCafe: state.entities.currCafe,
        filters: state.entities.filters,

    };
};


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
        updateFavorites: (id, data) => dispatch(updateFavorites(id, data)),
        fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
        openPopUp: () => dispatch(openPopUp()),
        fetchRecommended: (id) => dispatch(fetchRecommended(id)),
    };
};


function RecommendModal(props){

    if (!props.modal) {
        return null
    }

    const recommendModal = (
        <div className="recommend-modal" onClick={(e) => e.stopPropagation()}>

            <div className="recommend-text">
                <div>
                    Hey! Our search with those parameters yielded no results.
                </div>
                
                <div>
                    Would you like us to fill your results with some StudyPal favorites? (Recommended)
                </div>
                   
            </div>
            <br/>
     
            <img className="modal-gif" src={gif}></img>
            
            <div className="yes-no-box">
                <button className="yes-button" onClick={
                    () => {

                        props.fetchRecommended("5ecd46d2a18efe02cc5d14f2")
                        props.closeModal();

                    }
                }>Yes</button>
                <button className="yes-button" onClick={
                    () => {

                        props.history.push(`/`)
                        props.closeModal();


                    }
                }>No</button>

            </div>
          
       
   


        </div>
    );


    let selectedModal = null;

    if (props.modal === "recommendModal") selectedModal = recommendModal;


    return (
        // <div className="modal-recommend-backdrop" onClick={props.closeModal}>
        //     {selectedModal}


        // </div>

        <div className="modal-recommend-backdrop" >
            {selectedModal}


        </div>
    );




}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecommendModal));