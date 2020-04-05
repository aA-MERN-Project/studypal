import React from "react";
import "./modal.scss";
import Carousel from "../carousel/carousel"
import Map from '../map/directions';


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

    // Put in after setting up user model
    // let saved = studyPalCafe.saved_amount;
    
    const carouselModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={photos} />
        </div>
        <div className="business-misc">
          <h1> {name} </h1>
          <div>
            Distance <b>{distance_away}</b> | Duration <b>{duration}</b> 
          </div>
          <div>
            Numbers of Times Randomly Rolled <b>{rolled}</b> | Selected <b>{selected}</b> | Studyer Favorites <b>0</b>
          </div>
         
        </div>
        <Map 
          cafe_lat = {cafe_lat} 
          cafe_lng = {cafe_lng}
          my_lat = {my_lat}
          my_lng = {my_lng}
          
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