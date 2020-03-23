import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import './splash.scss';
import NavBar from '../navbar/navbar_container';
import $ from "jquery";

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // TOY DATA FOR FILTER CHANGE LATER
            miles_away : 100, 
            hours_opened_left : 24,
            wifi : true,
            credit_card : false,
            noise_level : false,
            location_zip_code: 94111,
            my_lat: null,
            my_lng: null,

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCoordinates = this.findCoordinates.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
      $("input[type=radio]:checked").prop("checked", false);


      this.setState({
        miles_away: 100,
        hours_opened_left: 24,
        wifi: false,
        credit_card: false,
        noise_level: false,
      })
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
       
        let state = this.state;

        state.wifi ? state.wifi = "yes" : state.wifi = "no";
        state.noise_level ? state.noise_level = "average" : state.noise_level = "loud";
        state.credit_card ? state.credit_card = "yes" : state.credit_card = "no";


        debugger
        this.props.fetchCafeByFilters(state)
        this.props.getFilters(state)
        this.props.history.push(`/cafe`);

    };


    update(field) {
        
        return e => this.setState({
            [field] : JSON.parse(e.currentTarget.value)
        })
    }

    render() {

         return (
          <div className="index">
            {/* <NavBar /> */}
            <div className="content">
              <div className="cta">Discover your cafe for today.</div>

              <div id="looking-for">What are you looking for?</div>

              <div className="preferences">
                
              </div>


               <form>
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




               <form>
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


               <form>
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


               <button onClick={() => this.clear()}>Clear All</button>
                


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


export default Splash;
