import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            miles_away : '',
            hours_away : '',
            free_wifi : '',
            credit_card : '',
            noise_level : '',
            zipcode : '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    // pickRandomCafe(){


    //     const cafe_data = Object.assign({}, this.state);
        
    // }




    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchCafeByZipcode(this.state.zipcode);
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
