import React from "react";
import "./modal.scss";
import Carousel from "../carousel/carousel"
import Map from '../map/directions';


const Modal = (props) => {
     debugger
    if (!props.modal){
        return null
    }
    let name = {}
    let studyPalCafe = {}
    let distance_away = {}
    let photos = {}
    let duration = {}
    let rolled = {}
    let selected = {}
    let my_lat = {}
    let my_lng = {}
    let cafe_lat = {}
    let cafe_lng = {}
    let phone_num = {}
    let address = {}
    let favorite_amount = {}
    debugger
    if(props.data.studyPalCafe.name) {
      name = props.data.studyPalCafe.name
      studyPalCafe = props.data.studyPalCafe;
      distance_away = studyPalCafe.distance_away;
      photos = props.data.yelpData.photos;
      duration = (studyPalCafe.distance_away * 17.5).toFixed(2);
      rolled = studyPalCafe.rolled_amount;
      selected = studyPalCafe.selected_amount;
      my_lat = props.data.filters.my_lat;
      my_lng = props.data.filters.my_lng;
      cafe_lat = studyPalCafe.coordinates_latitude;
      cafe_lng = studyPalCafe.coordinates_longitude;
      phone_num = props.data.yelpData.display_phone;
      address = props.data.yelpData.location.display_address;
      favorite_amount = studyPalCafe.favorite_amount;
    }
    


    // Put in after setting up user model
    // let saved = studyPalCafe.saved_amount;
   
    let formatTime = function(fourDigitTime) {
      let hours24 = parseInt(fourDigitTime.substring(0, 2));
      let hours = ((hours24 + 11) % 12) + 1;
      let amPm = hours24 > 11 ? "pm" : "am";
      let minutes = fourDigitTime.substring(2);
      return hours + ":" + minutes + amPm;
    }

    let calculateTime = function(hours) {
      let dateApi = new Date();
      let day = dateApi.getDay();
      if (!hours) return null
      if (!hours[0].open[day]) {
        return "Unavailable Time For This Day"
      } else {
        return formatTime(hours[0].open[day].end);
      }
    }
    
    let time = calculateTime(props.yelpCafe.hours)

    let handleDeleteFavorite = function (userId, cafe) {
      const favorites = new Object();
      favorites.type = "unfavorite";
      favorites.cafe = cafe;
      props.updateFavorites(userId, favorites);
      props.fetchCurrCafe(cafe.id);
    };

    let handleAddFavorite = function(userId, cafe){
        const favorites = new Object();
        favorites.type = "favorite";
        favorites.cafe = cafe;
        // debugger;
        props.updateFavorites(userId, favorites);
        props.fetchCurrCafe(cafe.id);
        
    }


    debugger
    const cafeModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={photos} />
        </div>
        <div className="business-misc">
          <h1 className="modal-name"> {name} </h1>
          <div className="modal-horizontal-line"></div>
          <div className="business-misc-flex">
            <div className="modal-left">
              <div className="time-modal">Open until {time} Today</div>
              <div className="modal-address">
                {address[0]}, {address[1]}
              </div>
              <div className="modal-address">{phone_num}</div>
            </div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-mid">
              <div className="modal-distance-duration">
                {distance_away} miles away
              </div>
              <div className="modal-distance-duration">{duration} minutes</div>
            </div>
          </div>
          <div className="modal-bottom">
            <div className="modal-horizontal-info"></div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-right">
              <div className="rolled-favorited">
                Number of Times Randomly Rolled: {rolled}
              </div>
              {/* <div>Selected: {selected}</div> */}
              <div className="rolled-favorited">Favorited by {props.currCafe.favorite_amount} others </div>
              <a
                className="yelp"
                onClick={() =>
                  handleAddFavorite(props.data.user.id, props.data.yelpData)
                }
              >
                <div id="yelp-text">Favorite</div>
              </a>

              <a
                className="yelp"
                onClick={() =>
                  handleDeleteFavorite(props.data.user.id, props.data.yelpData)
                }
              >
                <div id="yelp-text">Unfavorite </div>
              </a>
            </div>
          </div>
          {/* <div className="modal-distance-duration">
            Distance <b>{distance_away}</b>  |  Duration <b>{duration}</b> 
          </div>
          <div>
            Numbers of Times Randomly Rolled <b>{rolled}</b> | Selected <b>{selected}</b> 
            | Studier Favorites <b>0</b>
          </div> */}
        </div>
          <Map
            cafe_lat={cafe_lat}
            cafe_lng={cafe_lng}
            my_lat={my_lat}
            my_lng={my_lng}
        />
       
      </div>
    );
  let favoriteData = props.yelpCafe
  const favoriteModal = (
    <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
      <div className="carousel-container">
        <Carousel photos={photos} />
      </div>
      <div className="business-misc">
        <h1 className="modal-name"> {name} </h1>
        <div className="modal-horizontal-line"></div>
        <div className="business-misc-flex">
          <div className="modal-left">
            <div className="time-modal">Open until {time} Today</div>
            <div className="modal-address">
              {favoriteData.location.display_address[0]}, {favoriteData.location.display_address[1]}
            </div>
            <div className="modal-address">{favoriteData.display_phone}</div>
          </div>
          {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
          <div className="modal-mid">
            <div className="modal-distance-duration">
              {distance_away} miles away
              </div>
            <div className="modal-distance-duration">{duration} minutes</div>
          </div>
        </div>
        <div className="modal-bottom">
          <div className="modal-horizontal-info"></div>
          {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
          <div className="modal-right">
            <div className="rolled-favorited">
              Number of Times Randomly Rolled: {rolled}
            </div>
            {/* <div>Selected: {selected}</div> */}
            <div className="rolled-favorited">Favorited by {props.currCafe.favorite_amount} others </div>
            <a
              className="yelp"
              onClick={() =>
                handleAddFavorite(props.data.user.id, props.data.yelpData)
              }
            >
              <div id="yelp-text">Favorite</div>
            </a>

            <a
              className="yelp"
              onClick={() =>
                handleDeleteFavorite(props.data.user.id, props.data.yelpData)
              }
            >
              <div id="yelp-text">Unfavorite </div>
            </a>
          </div>
        </div>
        {/* <div className="modal-distance-duration">
            Distance <b>{distance_away}</b>  |  Duration <b>{duration}</b> 
          </div>
          <div>
            Numbers of Times Randomly Rolled <b>{rolled}</b> | Selected <b>{selected}</b> 
            | Studier Favorites <b>0</b>
          </div> */}
      </div>
      <Map
        cafe_lat={cafe_lat}
        cafe_lng={cafe_lng}
        my_lat={my_lat}
        my_lng={my_lng}
      />

    </div>
  );

    // let favoriteModal = (
    //   <div>testest</div>

    // )

    // let selectedModal = this.props.modal === "cafeModal" ? cafeModal : 
    let selectedModal = cafeModal
    if(props.modal === "cafeModal") selectedModal = cafeModal 

    if(props.modal === "favoriteModal") selectedModal = favoriteModal
    return (
      <div className="modal-backdrop" onClick={props.closeModal}>
        {selectedModal}
      </div>
    );


}


export default Modal;