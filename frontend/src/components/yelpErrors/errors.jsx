import React from 'react';

import './errors.scss';

class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
      this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="index">
        <div className="errors">
          <div>Oops, something went wrong with the Yelp request. </div>
          <br />
          <div>Sorry, please try again in a few moments!</div>
        </div>
      </div>
    );
  }
}




export default Errors;