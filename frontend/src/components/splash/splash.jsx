import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // TOY DATA FOR FILTER CHANGE LATER
            miles_away : 1, 
            hours_away : 3,
            free_wifi : true,
            credit_card : true,
            noise_level : false,
            zipcode : '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }




    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchCafeByZipcode(this.state.zipcode);
        this.props.getFilters(this.state)
        // redirect to new page here with props
        this.props.history.push(`/cafe`);
    };


    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    render() {


        return (
          <div>
            <h1>SPLASH PAGE</h1>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="checkbox"
                    value={this.state.miles_away}

                />
              <input
                type="text"
                value={this.state.zipcode}
                placeholder="Enter your zip code"
                onChange={this.update("zipcode")}
              />

              <input type="submit" value="Find a Cafe" />
            </form>
          </div>
        );
      
    }


}


export default Splash;
