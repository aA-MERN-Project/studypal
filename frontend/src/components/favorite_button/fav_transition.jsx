import React from 'react';
import "./sliding.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


const FavTransition = (props) => {

    const favorite = (
      <div id="favorited" key={1}>
        <div>
          <i class="fas fa-check"></i> Favorited
                  </div>
      </div>
    );

    const unfavorite = (
      <div id="unfavorite" key={2}>
        <div>Removed from favorites</div>
      </div>
    );


    debugger


    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="spicy"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {props.isClicked ? (props.isFavorite ? favorite : unfavorite) : null}
        </ReactCSSTransitionGroup>
      </div>
    );

  }

  export default FavTransition;