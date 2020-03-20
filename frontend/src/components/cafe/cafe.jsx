import React from 'react';
import axios from "axios";
import ShowMap from "../map/show_map";
import "../../stylesheets/map.scss";
const apiKey = require("../../keys/keys").YELP_API_KEY;
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
  }

  applyFilters(cafe_array){



  }

  selectRandomCafe(cafe_array) {
    let applyFilters = cafe_array;

    return cafe_array[Math.floor(Math.random() * cafe_array.length)];
  }

  getYelpCafeById = id => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({ cafeFromYelpApi: res.data });
      })
      .catch(error => console.log(error));
  };

  //chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
  // run this command if top many apicalls

  // getYelpCafeById = id => {
  //   client
  //     .business(id)
  //     .then(response => {
  //       console.log(response.jsonBody);
  //       this.setState({ cafeFromYelpApi: response.jsonBody });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };


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
      debugger
      return "Unavailable Time For This Day"
    } else{
      return this.formatTime(hours[0].open[day].end);
    }
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cafes !== prevProps.cafes) {


        let randomCafe = this.selectRandomCafe(this.props.cafes);
        let leftOverCafes = this.props.cafes.filter(ele => {
            return ele.id !== randomCafe.id;
        });

       ;
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
    this.props.rerollCafes(this.state.leftOverCafes);
  }

  handleClick(e) {
    e.preventDefault();
    this.reRoll();
  }

  render() {
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