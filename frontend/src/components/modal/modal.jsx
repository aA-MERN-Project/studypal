import React from "react";
import "./modal.scss";
import Carousel from "../carousel/carousel"
import { withScriptjs } from "react-google-maps";
import Map from '../map/directions';


const Modal = (props) => {
    debugger
    if (!props.modal){
        return null
    }
    let studyPalCafe = props.data.studyPalCafe;
    
    const carouselModal = (
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <Carousel photos={props.data.yelpData.photos} />
        </div>
        <div className="business-misc">
          <div>
              Distance: {studyPalCafe.distance_away} Miles Duration: {studyPalCafe.distance_away * 17.5} Minute Walk
          </div>
          <div>
            
          </div>
         
        </div>
        <Map 
          cafe_lat = {studyPalCafe.coordinates_latitude} 
          cafe_lng = {studyPalCafe.coordinates_longitude}
          my_lat = {props.data.filters.my_lat}
          my_lng = {props.data.filters.my_lng}
          
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