import React from 'react';
import './retry.scss';
import NavBar from '../navbar/navbar_container';
import $ from "jquery";
import DropdownLocation from '../splash/clickable_dropdown';
import FavButton from '../favorite_button/fav_button';


class Retry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miles_away: null,
      hours_opened_left: 0,
      wifi: false,
      credit_card: false,
      noise_level: false,
      location_zip_code: "",
      my_lat: null,
      my_lng: null,
      random: "AFSAF"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.clear = this.clear.bind(this);
    this.findCafe = this.findCafe.bind(this);
    this.updateState = this.updateState.bind(this);
    this.update = this.update.bind(this);
  }

  updateState(field, value) {
    return () =>
      this.setState({
        [field]: value,
      });

  }

  clear() {
    $("input[type=radio]:checked").prop("checked", false);
    $("input[type=checkbox]:checked").prop("checked", false);


    this.setState({
      miles_away: null,
      hours_opened_left: 0,
      wifi: false,
      credit_card: false,
      noise_level: false
    });
  }

  getPosition(my_lat, my_lng, zipcode) {

    if (zipcode){
      this.setState({
        my_lat: my_lat,
        my_lng: my_lng,
        location_zip_code: zipcode,
      });

    } else {
      this.setState({
        my_lat: my_lat,
        my_lng: my_lng,
        location_zip_code: "",
      });

    }

  }

  findCoordinates() {
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  componentDidMount() {
    this.findCoordinates();
    this.setState({location_zip_code: ""})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let state = this.state;
    // state.location_zip_code ? (state.location_zip_code = parseInt(state.location_zip_code)) : state.location_zip_code = null;
    state.wifi ? (state.wifi = "yes") : (state.wifi = "no");
    state.noise_level ? (state.noise_level = "average") : (state.noise_level = "loud");
    state.credit_card ? (state.credit_card = "yes") : (state.credit_card = "no");
    state.location_zip_code === "" ? state.location_zip_code = null : state.location_zip_code = JSON.parse(state.location_zip_code);
    



    this.props.fetchCafeByFilters(state);
    this.props.getFilters(state);
    this.props.history.push(`/cafe`);
    // this.findCafe = this.findCafe.bind(this);


  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleZip(zip) {
    let zipArr = zip.split('');
    setInterval(() => {
      if (zipArr.length > 0) {
   
        this.setState({
          location_zip_code: this.state.location_zip_code + zipArr.shift()
        })
      }
    }, 50)
  }

  findCafe(e) {

    e.preventDefault();


    let zipcode = "94111";
    setTimeout(() => {
      this.handleZip(zipcode);
    }, 500)
    setTimeout(() => {
      this.handleSubmit(e)
    }, 1500)

  }



  render() {
    return (
      <div className="index">
        <NavBar />
        <div className="new-test">
          <div className="cta">Looks like you ran out of cafes!</div>

          <div id="looking-for">
            <b>Improve the results by:</b>
          </div>
          <ul id="looking-for-2">
            <li id="firstLookForLi">Searching without a distance preference</li>
            <li>Trying a different zipcode from San Francisco (94106, 94109, 94123)</li>
            {/* <li>
              Checking that your geolocation is{" "}
              <span
                className="click-rec-gray"
                onClick={() => this.findCoordinates()}
              >
                working
              </span>
            </li> */}
          </ul>

          <div className="preferences">
            <div className="distance-hours">
              <form className="distance">
                <span className="splash-filter-2">Within: </span>
                <label className="splash-filter">
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
                    className="checkbox"
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
                    className="checkbox"
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
                    className="checkbox"
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

          <div id="recommend-sf">
            Lost?{" "}
            <span className="click-rec-gray" onClick={this.findCafe}>
              Here's something for you.
            </span>
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
        </div>
      </div>
    );
  }
};

export default Retry;
