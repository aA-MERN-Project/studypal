import React from 'react';
<<<<<<< HEAD
// import LoginFormContainer from './session/login_form_container'
// import SignupFormContainer from './session/signup_form_container'
import { Switch, Route } from "react-router";
import NavBarContainer from './navbar/navbar_container'
import ProfileContainer from './profile/profile_container'
import "./app.css"

const App = () => (
  <div className="app">
    <NavBarContainer />
    <ProfileContainer />

    {/* <Switch>
      <Route exact path="/login" component={LoginFormContainer}/>
      <Route exact path="/signup" component={SignupFormContainer}/>

    </Switch> */}
  </div>
);
=======
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import { Switch, Route } from "react-router";
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return(
    <div>
    
      {/* <LoginFormContainer/> */}
>>>>>>> 195d1b812abc315a59433ba167d277f09f5972ae

      <Switch>
        <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupFormContainer}/>

      </Switch>
    </div>
  )
};

export default App;