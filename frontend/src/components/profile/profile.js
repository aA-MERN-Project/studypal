import { Stitch, AnonymousCredential } from "mongodb-stitch-browser-sdk";
import '../../reset.css'
import './profile.css'
import React from 'react'
import NavBar from '../navbar/navbar_container'
import $ from "jquery";
import coffee from './coffee.png'
import edit from './edit.png'

class Profile extends React.Component {
    constructor(props) {
        super(props)

         
        this.state = {
          user: this.props.user,       
          // miles_away:"",
          // hours_opened_left: "",
          // free_wifi: "false",
          // credit_card: "false",
          // noise_level: "false"    
          miles_away: this.props.user.miles_away,
          hours_opened_left: this.props.user.hours_opened_left,
          free_wifi: this.props.user.free_wifi,
          credit_card: this.props.user.credit_card,
          noise_level: this.props.user.noise_level
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.clear = this.clear.bind(this)
        this.updatePreferences = this.updatePreferences.bind(this)
    }

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    componentDidMount(){
      this.setState({user:this.props.user});
    }

    componentWillReceiveProps(nextProps){
      this.setState({user:nextProps.user});
    }

    clear() {
      // debugger
      $("input[type=radio]:checked").prop("checked", false);
      this.setState({
        miles_away: "",
        hours_opened_left: "",
        free_wifi: "false",
        credit_card: "false",
        noise_level: "false"
      })
      debugger
      this.props.updateUserPreferences(this.state.user.id, {
        miles_away: "",
        hours_opened_left: "",
        free_wifi: "false",
        credit_card: "false",
        noise_level: "false"
      });

      // this.props.updateUserPreferences(
      //   this.state.user.id,
      //   this.state.session.preferences
      // );

      // this.props.updateUserPreferences(this.state.user.id, 
      //   {
      //     miles_away: "",
      //     hours_opened_left: "",
      //     free_wifi: "false",
      //     credit_card: "false",
      //     noise_level: "false"
      //   }
      // )
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updatePreferences() {
      const updatedUser = this.state.user;
      if (updatedUser) {
        updatedUser.miles_away = this.state.miles_away;
        updatedUser.hours_opened_left = this.state.hours_opened_left;
        updatedUser.free_wifi = this.state.free_wifi;
        updatedUser.credit_card = this.state.credit_card;
        updatedUser.noise_level = this.state.noise_level;
      }

      this.props.updateUserPreferences(this.state.user.id, updatedUser);
    }

    render() {
      const client = Stitch.defaultAppClient;
      client.auth.loginWithCredential(new AnonymousCredential());
      let username ;
      let email;
      let zipcode;
      if (this.state.user){
        username = this.state.user.handle;
        email = this.state.user.email;
        zipcode = this.state.user.zipcode;
      }else{
        username = "";
        email = "";
        zipcode = "";
      }
      //  const {user} = this.state.user;
      //  let username = user ? user.handle : "";
      //  let email = user ? user.email : "";
      //  let zipcode = user ? user.zipcode : ""; 

        return (
          <div className="page">
            {/* <script src="https://s3.amazonaws.com/stitch-sdks/js/bundles/4.0.8/stitch.js"></script> */}
            <NavBar />
            <div className="profile-info-div">
              <div className="profile-info">
                <div className="img-info-div">
                  {/* <img className="coffee-img" src={coffee} /> */}
                  <img
                    // src={client.callFunction("getPicture", [
                    //   "studypal-dev",
                    //   "coffee.png"
                    // ])}
                    // src={client
                    // .callFunction("getPicture", ["studypal-dev", "coffee.png"])
                    // .then(echoedResult => {
                    //   console.log(`Echoed result: ${echoedResult}`);
                    // })}
                    className="coffee-img"
                    src={
                      "https://studypal-dev.s3-us-west-1.amazonaws.com/coffee.png"
                    }
                  />
                  {/* {client
                    .callFunction("getPicture", ["studypal-dev", "coffee.png"])
                    .then(echoedResult => {
                      console.log(`Echoed result: ${echoedResult}`);
                    })} */}
                  {/* {client.auth.loginWithCredential(new stitch.AnonymousCredential())}
                  {client.callFunction("getPicture", ["studypal-dev", "coffee.png"])} */}
                  <div className="only-profile-info">
                    <div className="name">{username}</div>
                    <div className="email">{email}</div>
                    <div className="zipcode">Current Zipcode {zipcode}</div>
                  </div>
                </div>
                {/* <img
                  className="edit"
                  src={
                    "https://studypal-dev.s3-us-west-1.amazonaws.com/edit.png"
                  }
                /> */}
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
                          />
                          Quiet Environment
                        </label>
                      </form>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => this.clear()}>Clear All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="find-cafe-profile-div">
              <button
                onClick={() => this.updatePreferences()}
                className="find-cafe-profile"
              >
                Find a Cafe
              </button>
            </div>
          </div>
        );
    }
}

export default Profile