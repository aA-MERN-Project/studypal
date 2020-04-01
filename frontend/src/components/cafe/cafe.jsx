import React from 'react';
import axios from "axios";
import { distance } from '../../util/distance_util'
import ShowMap from "../map/show_map";
import "../../stylesheets/map.scss";
import "./cafe.scss"
import LoadingPage from './loader';

const apiKey = require("../../keys/keys").YELP_API_KEY;

// DELETE KEY LATER!!
const TAKEOUTLATER = "UZittz7h5GXfqGN6CtGVeBd9Slxryw_l5kvsV8fRpS4D3jT9Zk0GnLWhvUsziHOoI52fl290Sg3JqCmJXPFxk3ooFdqTgSzja1AtBMQjTRQbXz2bDNEoc6TqZVBwXnYx"



class Cafe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomCafe: "", // USE THIS FOR MAIN PHOTO
            cafeFromYelpApi: "", //THIS HAS YELP API DATA
            leftOverCafes: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.reRoll = this.reRoll.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
        this.applyExtraFilters = this.applyExtraFilters.bind(this);
    }




    selectRandomCafe(cafe_array) {
        // Lets filter cafes before we select a random cafe
        return cafe_array[Math.floor(Math.random() * cafe_array.length)];

    }


    formatTime(fourDigitTime) {
        let hours24 = parseInt(fourDigitTime.substring(0, 2));
        let hours = ((hours24 + 11) % 12) + 1;
        let amPm = hours24 > 11 ? "pm" : "am";
        let minutes = fourDigitTime.substring(2);
        return hours + ":" + minutes + amPm;
    }

    calculateTime(hours) {
        let dateApi = new Date();
        let day = dateApi.getDay();
        if (!hours) return null
        if (!hours[0].open[day]) {
            return "Unavailable Time For This Day"
        } else {
            return this.formatTime(hours[0].open[day].end);
        }

    }

    calculateDistance(cafes) {
        //Return array with cafes distance
        let addedDistance = cafes.map(cafe => {
            cafe.distance_away = distance(
                this.props.filters.my_lat,
                this.props.filters.my_lng,
                cafe.coordinates_latitude,
                cafe.coordinates_longitude,
            );
            return cafe;
        })

        return addedDistance

    }


    applyExtraFilters(cafes) {
        return cafes.filter(cafe => cafe.distance_away < this.props.filters.miles_away);
    }


    reRoll() {

        // Removes current YelpCafe from array
        let leftOverCafes = this.props.cafes.filter(cafe => {
            return cafe.id !== this.props.yelpCafe.id;
        });

        // Puts into Redux cycle again
        this.props.rerollCafes(leftOverCafes);
    }

    handleClick(e) {
        e.preventDefault();
        this.reRoll();
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.cafes.length === 0){
            this.props.history.push(`/retry`)
        }
        
    }


    render() {

         
        const { loading } = this.props;
        if (loading) { return <LoadingPage />; } 
        
        
        if (this.props.cafes.length === 0) return null;

        // If no curr yelpcafe exist, request from API
        if (!this.props.yelpCafe) {
            this.props.fetchYelpCafeById(this.props.randomCafe.id)
        }
        if (!this.props.yelpCafe) return null 
        

        let display_address = this.props.yelpCafe.location.display_address;
        let time = this.calculateTime(this.props.yelpCafe.hours);
        let lat = this.props.yelpCafe.coordinates.latitude;
        let lng = this.props.yelpCafe.coordinates.longitude;
        let distance = this.props.randomCafe.distance_away;
        let noiseLevel = this.props.randomCafe.noise_level;


        return (
            <div>

                <h1>{this.props.yelpCafe.name}</h1>
                <button onClick={this.handleClick}>Show me another cafe!</button>
                <br />
                <h1>Open until {time} Today</h1>
                <br />
                <h1>
                    {display_address[0]}, {display_address[1]}
                </h1>
                <br />
                <h1>
                    Distance Away : {distance} Miles
                </h1>
                <br />
                <h1>
                    Noise Level : {noiseLevel}
                </h1>
                
                <h1>
                    <a href={this.props.yelpCafe.url}>View on Yelp</a>
                </h1>
                <br />

                <h1>
                    ** Shelter in Place May Affect Hours **

                </h1>
                <div>
                    <span><img src={this.props.yelpCafe.image_url}></img></span>
                    
                    <span><ShowMap key={lat} lat={lat} lng={lng} /></span>
                    
                </div>

    
                <br/>
            
            </div>
        );


    }
}


export default Cafe;