import React from 'react';
import {connect} from 'react-redux';
import { updateFavorites } from "../../actions/session_actions";
import { fetchCurrCafe } from "../../actions/cafe_actions"
import { cafeIncludes } from "../../util/button_util"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import "./button.css"
import { openPopUp } from '../../actions/pop_up_actions'

const mSTP = state => {
    
    return {
        user: state.session.user,
        currCafe: state.entities.currCafe,
        favorites: state.session.favorites,
    }
}


const mDTP = dispatch => {

    return {
        updateFavorites: (id, data) => dispatch(updateFavorites(id, data)),
        fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
        openPopUp: () => dispatch(openPopUp())
    }
}

const FavButton = (props) => {



    let handleDeleteFavorite = function (userId, cafe) {
        const favorites = new Object();
        favorites.type = "unfavorite";
        favorites.cafe = cafe;

        props.updateFavorites(userId, favorites).then(
          () => props.fetchCurrCafe(cafe.id)
        ).then(() => props.setClick(true))
          
    };

    let handleAddFavorite = function (userId, cafe) {
        const favorites = new Object();
        favorites.type = "favorite";
        favorites.cafe = cafe;

        props.updateFavorites(userId, favorites).then(
          () => props.fetchCurrCafe(cafe.id)
        ).then(() => props.setClick(true))
        props.openPopUp()
    }



    const FavoriteBold = (

        <i
          class="fas fa-heart"
          id="heart-icons"
          onClick={() => handleDeleteFavorite(props.user.id, props.currCafe)}
        ></i>
      
    );

    const FavoriteUnbold = (
      <i
        class="far fa-heart"
        id="heart-icons"
        onClick={() => handleAddFavorite(props.user.id, props.currCafe)}
      ></i>
    );


    if (!props.favorites) return null;
    const isFavorited = cafeIncludes(props.currCafe, props.favorites);
    
    debugger

    
    return (
      <span>
        {isFavorited ? FavoriteBold : FavoriteUnbold} 
      </span>
    );
    
}



export default connect(mSTP, mDTP)(FavButton)