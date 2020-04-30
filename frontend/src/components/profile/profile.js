import '../../reset.css';
import './profile.css';
import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Test from '../updateProfile/test';
import TestContainer from '../updateProfile/test_container';
import $ from "jquery";
import { Link } from "react-router-dom"


class Profile extends React.Component {
    constructor(props) {
        super(props);

         
        this.state = {
          updated_user: props.updatedUser,       
          updatedProf: "false",
          user: this.props.user,        
          miles_away: null,
          hours_opened_left: this.props.user.hours_opened_left,
          free_wifi: this.props.user.free_wifi,
          credit_card: this.props.user.credit_card,
          noise_level: this.props.user.noise_level
        };
    
        this.handler = this.handler.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.clear = this.clear.bind(this)
        this.updatePreferences = this.updatePreferences.bind(this)
        this.handleRoll = this.handleRoll.bind(this);
        this.findCoordinates = this.findCoordinates.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }

    handler(){
      this.setState({updatedProf: "true"});
    };

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    componentDidMount(){
      this.setState({user:this.props.user});
      if(this.props.user ){
        if(this.props.user.id){
          this.props.getUpdatedUser(this.props.user.id);
        }else{
          this.props.getUpdatedUser(this.props.user._id);
        }
        
      }
      this.findCoordinates();


      
    }

    componentDidUpdate(prevProps, prevState){
      if(prevProps.user !== this.props.user){
         if(this.props.user.id){
            this.props.getUpdatedUser(this.props.user.id);
         }else{
            this.props.getUpdatedUser(this.props.user._id);
         }   
      }
      
    }
  
    componentWillReceiveProps(nextProps){
      this.setState({user:nextProps.user});
    }

    clear() {
      $("input[type=radio]:checked").prop("checked", false);
      $("input[type=checkbox]:checked").prop("checked", false);

      this.setState({
        miles_away: null,
        hours_opened_left: 24,
        free_wifi: false,
        credit_card: false,
        noise_level: false
      })
      this.props.updateUserPreferences(this.state.user.id, {
        miles_away: null,
        hours_opened_left: 24,
        free_wifi: false,
        credit_card: false,
        noise_level: false
      });
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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updatePreferences(e) {
      e.preventDefault();
      const updatedUser = this.state.user;
      if (updatedUser) {
        updatedUser.miles_away = this.state.miles_away;
        updatedUser.hours_opened_left = this.state.hours_opened_left;
        updatedUser.free_wifi = this.state.free_wifi;
        updatedUser.credit_card = this.state.credit_card;
        updatedUser.noise_level = this.state.noise_level;
      }
      this.props.updateUserPreferences(this.state.user.id, updatedUser);

      this.handleRoll(e);

    }

    handleRoll(e){
      e.preventDefault();
      let filters = {
        miles_away: null,
        hours_opened_left: 24,
        wifi: false,
        credit_card: false,
        noise_level: false,
        location_zip_code: null,
        my_lat: this.state.my_lat,
        my_lng: this.state.my_lng,}

      filters.miles_away = this.state.miles_away;
      filters.hours_opened_left = this.state.hours_opened_left;
      filters.credit_card = this.state.credit_card;
      filters.noise_level = this.state.noise_level;
      filters.location_zip_code = this.props.updatedUser.zipcode;
      filters.wifi = this.props.updatedUser.free_wifi

      filters.wifi ? filters.wifi = "yes" : filters.wifi = "no";
      filters.noise_level ? filters.noise_level = "average" : filters.noise_level = "loud";
      filters.credit_card ? filters.credit_card = "yes" : filters.credit_card = "no";
      filters.location_zip_code = JSON.parse(filters.location_zip_code);
      
      this.props.fetchCafeByFilters(filters)
      this.props.getFilters(filters);
      this.props.history.push(`/cafe`);
    }

    render() {
      let username;
      let email;
      let zipcode;
      if (this.props.updatedUser){
        username = this.props.updatedUser.handle;
        email = this.props.updatedUser.email;
        zipcode = this.props.updatedUser.zipcode;
      }else{
        username = "";
        email = "";
        zipcode = "";
      }

        return (
          <div className="profile-page">
            <NavBarContainer />

            <div className="profile-info-div">
              <div className="profile-info">
                <div className="profile-container">
                  <div className="img-info-div">
                    <img
                      className="coffee-img"
                      src={
                        "https://studypal-dev.s3-us-west-1.amazonaws.com/coffee.png"
                      }
                    />
                    <div className="only-profile-info">
                      <div className="profile-name">{username}</div>
                      <div className="email">{email}</div>
                      <div className="zipcode">Current Zipcode: {zipcode}</div>
                    </div>
                  </div>
                  <div className="halfProfile2">
                    <TestContainer
                      user={this.props.user}
                      updatedUser={this.props.updatedUser}
                      errors={this.props.errors}
                      updateProfileAct={this.props.updateProfileAct}
                      handler={this.handler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="outer-filter-box-div">
              <div className="filter-box-div">
                <div className="profile-preferences">Saved Preferences</div>
                <div>
                  <div className="top-row">
                    <div className="top-mini-1">
                      <div className="within-select">Within: </div>
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            checked={this.state.miles_away === "0.5"}
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
                            checked={this.state.miles_away === "1"}
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
                            checked={this.state.miles_away === "3"}
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
                            checked={this.state.miles_away === "5"}
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
                            checked={this.state.miles_away === "10"}
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="10"
                          />
                          10 miles
                        </label>
                      </form>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="top-mini-2">
                      <div className="within-select">Open for the next: </div>
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            checked={this.state.hours_opened_left === "1"}
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
                            checked={this.state.hours_opened_left === "2"}
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
                            checked={this.state.hours_opened_left === "3"}
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
                            checked={this.state.hours_opened_left === "5"}
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
                            checked={this.state.hours_opened_left === "8"}
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="8"
                          />
                          8 hours
                        </label>
                      </form>
                    </div>
                  </div>
                  <br />
                  <div className="horizontal-line"></div>
                  <div className="bottom-row">
                    <div className="mini-1">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            checked={this.state.free_wifi === "true"}
                            onChange={this.update("free_wifi")}
                            type="radio"
                            value="true"
                            name="free_wifi"
                          />
                          Free WiFi
                        </label>
                      </form>
                    </div>
                    <div className="vertical-line"></div>

                    <div className="mini-2">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            checked={this.state.credit_card === "true"}
                            onChange={this.update("credit_card")}
                            type="radio"
                            value="true"
                            name="credit_card"
                          />
                          Takes Credit Card
                        </label>
                      </form>
                    </div>

                    <div className="vertical-line"></div>
                    <div className="mini-3">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            checked={this.state.noise_level === "true"}
                            onChange={this.update("noise_level")}
                            type="radio"
                            value="true"
                            name="noise_level"
                          />
                          Quiet Environment
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="profile-clear-div">
                    <button
                      className="profile-clear"
                      onClick={() => this.clear()}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="find-cafe-profile-div">
              <button
                onClick={this.updatePreferences}
                className="find-cafe-profile"
              >
                Find a Cafe
              </button>
              <img
                className="noun-espresso"
                src="https://studypal-dev.s3-us-west-1.amazonaws.com/noun_espresso.png"
              />
              <button
                onClick={() => this.props.history.push("/favorites")}
                className="favorite-cafe-profiles"
              >
                Favorite Cafes
              </button>
            </div>
          </div>
        );
    }
}

export default Profile