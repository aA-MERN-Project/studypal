import React from 'react';
import './splash.scss';
import NavBar from '../navbar/navbar_container';
import $ from "jquery";
import {zipCodes} from '../../util/splash_util';
import FavTransition from '../favorite_button/fav_transition'
import DropdownLocation from './clickable_dropdown';
import Modal from "../modal/modal_container";

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      miles_away: null,
      hours_opened_left: 0,
      wifi: false,
      credit_card: false,
      noise_level: false,
      location_zip_code: null,
      my_lat: null,
      my_lng: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.clear = this.clear.bind(this);
    this.update = this.update.bind(this);
    this.isZipcode = this.isZipcode.bind(this);
    this.isGeo = this.isGeo.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  clear() {
    $("input[type=radio]:checked").prop("checked", false);
    $("input[type=checkbox]:checked").prop("checked", false);


    this.setState({
      miles_away: null,
      hours_opened_left: 0,
      wifi: false,
      credit_card: false,
      noise_level: false,
    })
  }


  getPosition(my_lat, my_lng,zipcode) {

    this.setState({
      my_lat: my_lat,
      my_lng: my_lng,
      location_zip_code: zipcode,
    });

  }

  findCoordinates() {
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  

  componentDidMount() {
    if(this.props.isAuthenticated===true){
      if(this.props.user.id){
        this.props.getUpdatedUser(this.props.user.id);
      }else{
        this.props.getUpdatedUser(this.props.user._id);
      }
    }
    
  }


  isZipcode(){
    let zipcode = parseInt(this.state.location_zip_code)
    return !zipCodes.includes(zipcode)
     
  }

  isGeo(){
    if (!this.state.my_lat){
      alert('Please turn on geolocations to use that filter')
      this.findCoordinates();
    }
  
  }

  handleSubmit(e) {
    e.preventDefault();

    let state = this.state;
    state.wifi ? state.wifi = "yes" : state.wifi = "no";
    state.noise_level ? state.noise_level = "average" : state.noise_level = "loud";
    state.credit_card ? state.credit_card = "yes" : state.credit_card = "no";
    state.location_zip_code = JSON.parse(state.location_zip_code);

    this.props.fetchCafeByFilters(state)
    this.props.getFilters(state)
    this.props.history.push(`/cafe`);
  };

  update(field) {

    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }


  updateState(field, value){
       return () =>
         this.setState({
           [field]: value,
         });

  }

  render() {
    let welcomeMessage;
    if(this.props.isAuthenticated===true){
        if(this.props.updatedUser){
          welcomeMessage = `Welcome, ${this.props.updatedUser.handle}!`;

        }
        else if(this.props.user){
          welcomeMessage = `Welcome, ${this.props.user.handle}!`;
        }
    }
    else{
      welcomeMessage = "";
    }


    
    return (
      <div className="splashIndex">
        <NavBar />
        <Modal />
        <div className="content">
          <div id="welcomeName">{welcomeMessage}</div>

          <div className="cta">Discover your cafe for today.</div>

          <div id="looking-for">What are you looking for?</div>
          <div className="preferences">
            <div className="distance-hours">
              <form className="distance">
                <i class="fas fa-info-circle" aria-hidden="true" id="parent-2">
                  <div id="popup-2">
                    Our distance filter is based off of your browser's
                    geolocation. Results may vary.
                  </div>
                </i>
                <span id="withinMsg">Within: </span>
                <label className="filter">
                  {/* </i>   */}
                  {/* <span className="splash-filter-2">Within: </span>
                <label className="splash-filter"> */}
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="0.5"
                  />
                  0.5 miles
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="1"
                  />
                  1 mile
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="3"
                  />
                  3 miles
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="5"
                  />
                  5 miles
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="10"
                  />
                  10 miles
                </label>
              </form>

              <span className="divider">|</span>

              <form className="hours">
                <span className="splash-filter-2">Open for the next: </span>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="1"
                  />
                  1 hour
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="2"
                  />
                  2 hours
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="3"
                  />
                  3 hours
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="5"
                  />
                  5 hours
                </label>
                <label className="splash-filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="8"
                  />
                  8 hours
                </label>
              </form>
            </div>

            <div className="other-filters">
              <form className="wifi">
                <label className="splash-filter">
                  <input
                    className="checkbox alignbottom2"
                    onChange={this.update("wifi")}
                    type="checkbox"
                    value="true"
                  />
                  Free WiFi
                </label>
              </form>

              <span className="divider">|</span>

              <form className="card">
                <label className="splash-filter">
                  <input
                    className="checkbox alignbottom2"
                    onChange={this.update("credit_card")}
                    type="checkbox"
                    value="true"
                  />
                  Takes Credit Card
                </label>
              </form>

              <span className="divider">|</span>

              <form className="noise">
                <label className="splash-filter">
                  <input
                    className="checkbox alignbottom2"
                    onChange={this.update("noise_level")}
                    type="checkbox"
                    value="true"
                  />
                  Quiet Environment
                </label>
              </form>
            </div>

            <button className="clear" onClick={() => this.clear()}>
              Clear All
            </button>
          </div>

          <DropdownLocation
            my_lat={this.state.my_lat}
            my_lng={this.state.my_lng}
            updateState={this.updateState}
            findCordinates={this.findCoordinates}
            location_zip_code={this.state.location_zip_code}
            handleSubmit={this.handleSubmit}
            update={this.update}
            getPosition={this.getPosition}
            
          ></DropdownLocation>

          {/* <div className="roll-cafe">
            <input
              id="zip"
              type="text"
              value={this.state.location_zip_code}
              placeholder="Enter a ZIP code (94111)"
              onChange={this.update("location_zip_code")}
            />
            <input
              id="cafe-submit"
              onClick={this.handleSubmit}
              type="submit"
              value="Find a Cafe"
            />


          </div> */}

          <div id="sf-available">
            *Currently available only in San Francisco{" "}
            <i class="fas fa-info-circle" aria-hidden="true" id="parent">
              <div id="popup">
                Not in San Francisco? Just click on our search bar to pick a ZIP code in San Francisco!
              </div>
            </i>
          </div>
        </div>
      </div>
    );
  }
}


export default Splash;
