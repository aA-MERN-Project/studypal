import React from 'react';
import './splash.scss';
import NavBar from '../navbar/navbar_container';
import $ from "jquery";

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      miles_away: null,
      hours_opened_left: 24,
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
  
  }

  clear() {
    $("input[type=radio]:checked").prop("checked", false);


    this.setState({
      miles_away: null,
      hours_opened_left: 24,
      wifi: false,
      credit_card: false,
      noise_level: false,
    })
  }


  getPosition(position) {

    this.setState({
      my_lat: position.coords.latitude,
      my_lng: position.coords.longitude
    });

  }

  findCoordinates() {
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  

  componentDidMount() {
    this.findCoordinates();
    if(this.props.isAuthenticated===true){
      if(this.props.user.id){
        this.props.getUpdatedUser(this.props.user.id);
      }else{
        this.props.getUpdatedUser(this.props.user._id);
      }
    }
    
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();

    let state = this.state;
    //  
    //Mapping state to search params
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

  render() {
    // debugger;
    let welcomeMessage;
    if(this.props.isAuthenticated===true){
        if(this.props.updatedUser){
          // debugger;
          welcomeMessage = `Welcome, ${this.props.updatedUser.handle}!`;

        }
        else if(this.props.user){
          // debugger;
          welcomeMessage = `Welcome, ${this.props.user.handle}!`;
        }
    }
    else{
      // debugger;
      welcomeMessage = "";
    }
    
    return (
      <div className="index">
        <NavBar />
        <div className="content">
          <div id="welcomeName">
              {welcomeMessage}
          </div>
        <div className="cta">Discover your cafe for today.</div>

      {/* {this.loggedIn()} */}
      <div id="looking-for">What are you looking for?</div>
          <div className="preferences">

            <div className="distance-hours">

              <form className="distance">
                <span>Within: </span>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="0.5"
                  />
                              0.5 miles
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="1"
                  />
                              1 mile
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="3"
                  />
                              3 miles
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("miles_away")}
                    type="radio"
                    name="miles"
                    value="5"
                  />
                              5 miles
                            </label>
                <label className="filter">
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
                <span>Open for the next: </span>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="1"
                  />
                              1 hour
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="2"
                  />
                              2 hours
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="3"
                  />
                              3 hours
                            </label>
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("hours_opened_left")}
                    type="radio"
                    name="hours"
                    value="5"
                  />
                              5 hours
                            </label>
                <label className="filter">
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
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("wifi")}
                    type="radio"
                    value="true"
                  />
                            Free WiFi
                          </label>
              </form>

              <span className="divider">|</span>

              <form className="card">
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("credit_card")}
                    type="radio"
                    value="true"
                  />
                            Takes Credit Card
                          </label>
              </form>

              <span className="divider">|</span>

              <form className="noise">
                <label className="filter">
                  <input
                    className="checkbox"
                    onChange={this.update("noise_level")}
                    type="radio"
                    value="true"
                  />
                            Quiet Environment
                          </label>
              </form>
            </div>

            <button className="clear" onClick={() => this.clear()}>Clear All</button>
          </div>

          <div className="roll-cafe">
            <input 
              id="zip"
              type="text"
              value={this.state.location_zip_code}
              placeholder="Enter your zip code"
              onChange={this.update("location_zip_code")}
            />
            <input id="cafe-submit" onClick={this.handleSubmit} type="submit" value="Find a Cafe" />
          </div>
        </div>
      </div>
    );
  }
}


export default Splash;
