import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./modal.scss";
import "../favorite_button/sliding.scss";
import Carousel from "../carousel/carousel";
import Map from '../map/directions';
import FavButton from '../favorite_button/fav_button';
import FavTransition from '../favorite_button/fav_transition';
import { cafeIncludes } from "../../util/button_util";
import { useState} from 'react';    


function Modal(props){

    const [isClicked, setClick] = useState(false);
    if (!props.modal){
        return null
    }

    let handleUnfavorite = (userId,cafe) => {
            const favoriteData = new Object();
            favoriteData.type = "unfavorite";
            favoriteData.cafe = cafe;
            props.updateFavorites(userId, favoriteData);
    }


    let formatTime = function (fourDigitTime) {
      let hours24 = parseInt(fourDigitTime.substring(0, 2));
      let hours = ((hours24 + 11) % 12) + 1;
      let amPm = hours24 > 11 ? "pm" : "am";
      let minutes = fourDigitTime.substring(2);
      return hours + ":" + minutes + amPm;
    };

    let calculateTime = function (hours) {
      let dateApi = new Date();
      let day = dateApi.getDay();
      if (!hours) return null;
      if (!hours[0].open[day]) {
        return "Unavailable Time For This Day";
      } else {
        return formatTime(hours[0].open[day].end);
      }
    };

  let myPosition = null;

  let getPosition = (position) => {
    myPosition = {
      my_lat: position.coords.latitude,
      my_lng: position.coords.longitude
    }

  }


  let findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(getPosition);
  }


    const {
      rolled_amount,
      selected_amount,
      favorite_amount,
    } = props.currCafe;

    const { 
      name,
      coordinates,
      photos,
      hours,
      display_phone,
      url,
      is_closed,
      location,

     } = props.yelpCafe;


   

    const time = calculateTime(hours);
    const isOpen = <div className="time-modal">Open until {time}</div>;
    const isClosed = <div className="time-modal-red">Currently Closed</div>;


    let openRightNow = false;
    if (props.yelpCafe.hours) openRightNow = hours[0].is_open_now;

  

    const favoriteModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={photos} />
        </div>
        <div className="business-misc">
          <h1 className="modal-name">
            {" "}
            {name}{" "}
            {/* <input
              className="cafe-remove"
              type="submit"
              onClick={() => {
                handleUnfavorite(props.user.id, props.currCafe);
                props.closeModal();
              }}
              value="Remove"
            /> */}
          </h1>
          <div className="modal-horizontal-line"></div>
          <div className="business-misc-flex">
            <div className="modal-left">
              {openRightNow ? isOpen : isClosed}
              <div className="modal-address"></div>
              <div className="modal-address">{location ? location.display_address[1] : null}</div>
              {/* <div className="modal-address">{location.display_address[2]}</div> */}
              <div className="modal-address">{display_phone}</div>
              <a href={url} className="yelpLk" target="_blank">View on Yelp</a>
            </div>
            {/* <div className="modal-mid"> */}
            <div className="vertical-line-modal"></div>
            <div className="modal-bottom">
              <div className="modal-right">
                <div className="rolled-favorited">
                  <b>{favorite_amount}</b> other <b>StudyPallers</b> have
                  favorited this cafe
                </div>
                <div className="rolled-favorited">
                  <b>{selected_amount}</b> other <b>StudyPallers</b> have viewed this cafe
                </div>
                <div className="rolled-favorited">
                  <b>{rolled_amount}</b> times <b>StudyPal</b> has rolled this
                  cafe on our platform
                </div>
                {/* <input
                    id="cafe-submit"
                    type="submit"
                    onClick={() =>{
                      
                      props.openModal("mapModal", "data") }
                    }
                    value="Route"
                  /> */}
                {/* <FavButton /> */}
                {/* <PopUpContainer /> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    );

    const mapModal = (
      <div className="map-modal">
        <div>
          <Map
          />
        </div>
      </div>
    );

    let isFavorited = null;
    if (props.favorites) isFavorited = cafeIncludes(
                           props.currCafe,
                           props.favorites
                         );

    

    const cafeModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={photos} />
        </div>
        <div className="business-misc">
          <h1 className="modal-name">
            {" "}
            {name} <FavButton setClick={setClick}/>
          </h1>
          <div className="modal-horizontal-line"></div>
          <div className="business-misc-flex">
            <div className="modal-left">
              {openRightNow ? isOpen : isClosed}
              <div className="modal-address"></div>
              {/* <div className="modal-address">{location.display_address[2]}</div> */}
              <div className="modal-address">{display_phone}</div>
              <a href={url} className="yelpLk" target="_blank">View on Yelp</a>
            </div>
            <div className="vertical-line-modal"></div>
            <div className="modal-right">
              <div className="rolled-favorited">
                <b>{favorite_amount}</b> other <b>StudyPallers</b> have
                favorited this cafe
              </div>
              <div className="rolled-favorited">
                <b>{selected_amount}</b> other <b>StudyPallers</b> have viewed
                this cafe
              </div>
              <div className="rolled-favorited">
                <b>{rolled_amount}</b> times <b>StudyPal</b> has rolled this
                cafe on our platform
              </div>
              {/* <input
                    id="cafe-submit"
                    type="submit"
                    onClick={() => {
                      props.openModal("mapModal", "data");
                    }}
                    value="Route"
                  /> */}
            </div>
          </div>
        </div>
        <FavTransition isFavorite={isFavorited} isClicked={isClicked} history={props.history} closeModal={props.closeModal}/>
      </div>
    );

    const turnOnLocationModal = (
      <div className="location-modal" onClick={(e) => e.stopPropagation()}>
        <img className="doggo-modal" src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/study_dog.png"/>
        <br/>
        <h1>Hey there! We can't find your location.</h1>
        <br />
        Try refreshing the page, allowing the browser to access
        your location, or picking a ZIP code from the search bar.
      </div>
    );


    let selectedModal = null;
    
    if(props.modal === "mapModal") selectedModal = mapModal;
    if(props.modal === "turnOnLocationModal") selectedModal = turnOnLocationModal;
    if(props.modal === "cafeModal") selectedModal = cafeModal;
    if(props.modal === "favoriteModal") selectedModal = favoriteModal;


    return (
      <div className="modal-backdrop" onClick={props.closeModal}>
        {selectedModal}
      
        
      </div>
    );


}

export default Modal;