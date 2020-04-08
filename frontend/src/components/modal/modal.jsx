import React from "react";
import "./modal.scss";
import Carousel from "../carousel/carousel"
import Map from '../map/directions';
import FavButton from '../favorite_button/fav_button'
// import PopUpContainer from "../popUp/pop_up_container";

//Helper Functions

    

const Modal = (props) => {
    if (!props.modal){
        return null
    }

    //Helper Methods
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


    // Data coming from StudyPal Backend
    const {
      rolled_amount,
      selected_amount,
      favorite_amount,
    } = props.currCafe;

    // Data coming from Yelp API
    const { 
      name,
      coordinates, // coordinates.latitude / coordinates.longitude
      photos,
      hours,
      display_phone,
      url,
      is_closed,
      location, //location.address1, location.address3, location.city, location.zip_code, location.display_address

     } = props.yelpCafe;
   
    // duration = (studyPalCafe.distance_away * 17.5).toFixed(2)

   
    const time = calculateTime(hours);
    const isOpen = <div className="time-modal">Open until {time}</div>;
    const isClosed = <div className="time-modal-red">Currently Closed</div>;
    const openRightNow = hours[0].is_open_now;
    

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
              {openRightNow ? isOpen : isClosed}
              <div className="modal-address">{location.display_address[0]}</div>
              <div className="modal-address">{location.display_address[1]}</div>
              <div className="modal-address">{location.display_address[2]}</div>
              <div className="modal-address">{display_phone}</div>
            </div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-mid">
              <div className="modal-distance-duration">

                {/* {distance_away} miles away */}
              </div>
              {/* <div className="modal-distance-duration">{duration} minutes</div> */}

            </div>
          </div>
          <div className="modal-bottom">
            <div className="modal-horizontal-info"></div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-right">
              <div className="rolled-favorited">
                {/* Number of Times Randomly Rolled: {rolled} */}
              </div>
              {/* <div>Selected: {selected}</div> */}
              <div className="rolled-favorited">

                <div>
                  <b>{favorite_amount}</b> other <b>StudyPallers</b> have
                  favorited this cafe
                </div>
                <div>
                  <b>{selected_amount}</b> other <b>StudyPallers</b> have gone
                  to this cafe
                </div>
                <div>
                  <b>{rolled_amount}</b> times <b>StudyPal</b> has rolled this
                  cafe on our state of the art platform :)
                </div>
                {/* <input
                  id="cafe-submit"
                  type="submit"
                  onClick={() =>{
                    
                    props.openModal("mapModal", "data") }
                  }
                  value="Route"
                /> */}
                <input
                  id="cafe-submit"
                  type="submit"
                  onClick={() => {
                    handleUnfavorite(props.user.id, props.currCafe)
                    props.closeModal();
          
                  }}
                  value="Remove"
                />

              </div>
              {/* <FavButton /> */}
              {/* <PopUpContainer /> */}
            </div>
          </div>
        </div>
      </div>
    );

    const mapModal = (
      <div className="map-modal">
        <div>
          <Map
          // cafe_lat={cafe_lat}
          // cafe_lng={cafe_lng}
          // my_lat={my_lat}
          // my_lng={my_lng}
          />
        </div>
      </div>
    );



    const cafeModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={photos} />
        </div>
        <div className="business-misc">
          <h1 className="modal-name"> {name} <FavButton /></h1>
          <div className="modal-horizontal-line"></div>
          <div className="business-misc-flex">
            <div className="modal-left">
              {openRightNow ? isOpen : isClosed}
              <div className="modal-address">{location.display_address[0]}</div>
              <div className="modal-address">{location.display_address[1]}</div>
              <div className="modal-address">{location.display_address[2]}</div>
              <div className="modal-address">{display_phone}</div>

            </div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-mid">
              <div className="modal-distance-duration">
                {/* {distance_away} miles away */}
              </div>
              {/* <div className="modal-distance-duration">{duration} minutes</div> */}
            </div>
          </div>
          <div className="modal-bottom">
            <div className="modal-horizontal-info"></div>
            {/* <img className="noun-espresso" src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png" /> */}
            <div className="modal-right">
              <div className="rolled-favorited">
                {/* Number of Times Randomly Rolled: {rolled} */}
              </div>
              {/* <div>Selected: {selected}</div> */}
              <div className="rolled-favorited">
                <div>
                  <b>{favorite_amount}</b> other <b>StudyPallers</b> have
                  favorited this cafe
                </div>
                <div>
                  <b>{selected_amount}</b> other <b>StudyPallers</b> have gone
                  to this cafe
                </div>
                <div>
                  <b>{rolled_amount}</b> times <b>StudyPal</b> has rolled this
                  cafe on our state of the art platform :)
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
        </div>
      </div>
    );



    let selectedModal = null;
    
    if(props.modal === "mapModal") selectedModal = mapModal;
    if(props.modal === "cafeModal") selectedModal = cafeModal;
    if(props.modal === "favoriteModal") selectedModal = favoriteModal;


    return (
      <div className="modal-backdrop" onClick={props.closeModal}>
        {selectedModal}
      </div>
    );


}

export default Modal;