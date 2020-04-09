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
      <div className="errorsIndex">
        <div className="errorsContent">
          <div className="sorry">SORRY :( </div>
          <br/>
          <div id="yellow">Something went wrong on our end</div>
          <div id="yellow2">Please go back and try again</div>
          <div id="doggos">
            <img id="study-img" src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/study_dog.png"></img>

            {/* <div id="doggos-2">Meet Thomas & Jones</div> */}

          </div>
        </div>
      </div>
    );
  }
}




export default Errors;