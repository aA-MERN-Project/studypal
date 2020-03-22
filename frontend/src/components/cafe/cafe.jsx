import React from 'react';
import axios from "axios";
import distance from '../../util/distance_util'
import ShowMap from "../map/show_map";
import "../../stylesheets/map.scss";
import "./cafe.scss"
import LoadingPage from './loader';

const apiKey = require("../../keys/keys").YELP_API_KEY;

// DELETE KEY LATER!!
const TAKEOUTLATER = "UZittz7h5GXfqGN6CtGVeBd9Slxryw_l5kvsV8fRpS4D3jT9Zk0GnLWhvUsziHOoI52fl290Sg3JqCmJXPFxk3ooFdqTgSzja1AtBMQjTRQbXz2bDNEoc6TqZVBwXnYx"
const yelp = require("yelp-fusion");
const client = yelp.client(apiKey);



class Cafe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCafe: "", // USE THIS FOR MAIN PHOTO
      cafeFromYelpApi: "", //THIS HAS YELP API DATA
      leftOverCafes: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.reRoll = this.reRoll.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.calculateTime = this.calculateTime.bind(this);
    this.applyExtraFilters = this.applyExtraFilters.bind(this);
  }



  componentDidMount(){

  }


  selectRandomCafe(cafe_array) {
    // Lets filter cafes before we select a random cafe
    return cafe_array[Math.floor(Math.random() * cafe_array.length)];
    
  }

  getYelpCafeById = id => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${TAKEOUTLATER}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({ cafeFromYelpApi: res.data });
      })
      .catch(error => console.log(error));
  };


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
    } else{
      return this.formatTime(hours[0].open[day].end);
    }
      
  }

  calculateDistance(cafes){
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

  hoursTilClosing(cafe){


  }

  applyExtraFilters(cafes){
   
    return cafes.filter(cafe => cafe.distance_away < this.props.filters.miles_away);
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cafes !== prevProps.cafes) {

      let cafes = this.applyExtraFilters(this.calculateDistance(this.props.cafes))
      let randomCafe = this.selectRandomCafe(cafes);

      // redirect to homepage if no cafes left
      if (cafes.length === 0) {
        this.props.history.push(`/`)
      }

    
      let leftOverCafes = cafes.filter(ele => {
          return ele.id !== randomCafe.id;
      });


      this.setState(
        {
          randomCafe: randomCafe,
          leftOverCafes: leftOverCafes
        },
        () => this.getYelpCafeById(randomCafe.id)
      );
    }
  }

  reRoll() {
    this.props.startLoadingSingleCafe()
    this.props.rerollCafes(this.state.leftOverCafes);
  }

  handleClick(e) {
    e.preventDefault();
    this.reRoll();
  }

  render() {

    const { loading } = this.props;
    if (loading) { return <LoadingPage />; }



    if (!this.state.cafeFromYelpApi) return null;
    let display_address = this.state.cafeFromYelpApi.location.display_address;
    let time = this.calculateTime(this.state.cafeFromYelpApi.hours);
    let lat = this.state.cafeFromYelpApi.coordinates.latitude;
    let lng = this.state.cafeFromYelpApi.coordinates.longitude;

    return (


      <div>
        
        <h1>{this.state.cafeFromYelpApi.name}</h1>
        <br />
        <h1>Open until {time} Today</h1>
        <br />
        <h1>
          {display_address[0]}, {display_address[1]}
        </h1>
        <h1>
          <a href={this.state.cafeFromYelpApi.url}>View on Yelp</a>
        </h1>
        <br />
        <img src={this.state.cafeFromYelpApi.image_url}></img>
        <ShowMap key={lat} lat={lat} lng={lng} />
        <button onClick={this.handleClick}>Show me another cafe!</button>
      </div>
    );
  }
}


export default Cafe;