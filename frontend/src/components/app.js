import React from 'react';
import NavBarContainer from './navbar/navbar_container'
import ProfileContainer from './profile/profile_container'
import "./app.css"
import {AuthRoute, ProtectedRoute, NavBarRedirect} from '../util/route_util';
import SplashContainer from './splash/splash_container'
import CafeContainer from './cafe/cafe_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <LoginFormContainer/> */}

      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/cafe" component={CafeContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/user" component={ProfileContainer}/>
      </Switch>
    </div>
  );
};

export default App;