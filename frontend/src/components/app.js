import React from 'react';
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

export default App