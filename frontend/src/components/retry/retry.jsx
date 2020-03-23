import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import './retry.scss';
import NavBar from '../navbar/navbar_container';
import $ from "jquery";

class Retry extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
            miles_away : 6, 
            hours_opened_left : 3,
            wifi : "yes",
            credit_card : true,
            noise_level : true,
            location_zip_code: 94111,
            my_lat: null,
            my_lng: null,

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCoordinates = this.findCoordinates.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }


    getPosition(position){
        
         this.setState({
           my_lat: position.coords.latitude,
           my_lng: position.coords.longitude
         });
         console.log(position.coords.latitude, position.coords.longitude);

    }

    findCoordinates(){
        navigator.geolocation.getCurrentPosition(this.getPosition);
    }

    componentDidMount(){
        this.findCoordinates();

    }


    handleSubmit(e) {
        
        e.preventDefault();
        // let filters = this.matchFilterParams(this.state)
    
        this.props.fetchCafeByFilters(this.state);
        this.props.getFilters(this.state)
        this.props.history.push(`/cafe`);

    };


    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    render() {

         return (
          <div className="index">
            {/* <NavBar /> */}
            <div className="content">
              <div className="cta">Discover your cafe for today.</div>

              <div id="looking-for">What are you looking for?</div>

              <h1>Sorry there are no cafes for your search, please try again</h1>
              <div className="preferences">
                
              </div>
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



              

              <div className="roll-cafe">
                <input id="zip"
                  type="text"
                  value={this.state.location_zipcode}
                  placeholder="Enter your zip code"
                  onChange={this.update("location_zip_code")}
                />
                  <input id="cafe-submit" type="submit" value="Find a Cafe" onClick={this.handleSubmit}/>
              </div>


              
            </div>
          </div>
        ); 
    }


}


export default Retry;
