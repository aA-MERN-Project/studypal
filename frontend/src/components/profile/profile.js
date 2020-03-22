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
          miles_away: "",
          hours_opened_left: "",
          free_wifi: "",
          credit_card: "",
          noise_level: "",
          user: props.user
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.clear = this.clear.bind(this)
    }

    handleSubmit(e) {
       
        this.props.processForm(this.state)
        
    }

    clear() {
      $("input[type=radio]:checked").prop("checked", false);

      this.setState({
        miles_away: "",
        hours_opened_left: "",
        free_wifi: "",
        credit_card: "",
        noise_level: "",
      })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
          <div className="page">
            <NavBar />
            <div className="profile-info-div">
              <div className="profile-info">
                <div className="img-info-div">
                  <img className="coffee-img" src={coffee}/>
                  <div className="only-profile-info">
                    <div className="name">Name</div>
                    <div className="email">Email</div>
                    <div className="zipcode">Current Location</div>
                  </div>
                </div>
                {/* <img className="edit" src={edit}/> */}
              </div>
            </div>
            <br />
            <div className="outer-filter-box-div">
              <div className="filter-box-div">
                <div className="preferences">Saved Preferences</div>
                <div>
                  <div className="top-row">
                    <div className="top-mini-1">
                      <div className="within-select">Within: </div>
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="0.5 miles"
                          />
                          0.5 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="1 mile"
                          />
                          1 mile
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="3 miles"
                          />
                          3 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="5 miles"
                          />
                          5 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="10 miles"
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
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="1 hour"
                          />
                          1 hour
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="2 hours"
                          />
                          2 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="3 hours"
                          />
                          3 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="5 hours"
                          />
                          5 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="8 hours"
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
              <button className="find-cafe-profile">Find a Cafe</button>
            </div>
          </div>
        );
    }
}

export default Profile