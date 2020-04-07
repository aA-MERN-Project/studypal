import React from "react";
import "./modal.scss";
import Carousel from "../carousel/carousel"
import Map from '../map/directions';
import FavButton from '../favorite_button/fav_button'



const Modal = (props) => {
     
    if (!props.modal){
        return null
    }
    let name = props.data.studyPalCafe.name;
    let studyPalCafe = props.data.studyPalCafe;
    let distance_away = studyPalCafe.distance_away;
    let photos = props.data.yelpData.photos;
    let duration = (studyPalCafe.distance_away * 17.5).toFixed(2);
    let rolled = studyPalCafe.rolled_amount;
    let selected = studyPalCafe.selected_amount;
    let my_lat = props.data.filters.my_lat;
    let my_lng = props.data.filters.my_lng;
    let cafe_lat = studyPalCafe.coordinates_latitude;
    let cafe_lng = studyPalCafe.coordinates_longitude;
    let phone_num = props.data.yelpData.display_phone;
    let address = props.data.yelpData.location.display_address;
    let favorite_amount = studyPalCafe.favorite_amount;
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



    const carouselModal = (
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
              <div className="rolled-favorited">
                Favorited by {props.currCafe.favorite_amount} others
                <FavButton />
              </div>
            </div>
          </div>
        </div>

        <Map
          cafe_lat={cafe_lat}
          cafe_lng={cafe_lng}
          my_lat={my_lat}
          my_lng={my_lng}
        />
      </div>
    );


    return (
      <div className="modal-backdrop" onClick={props.closeModal}>
        {carouselModal}
      </div>
    );


}


export default Modal;