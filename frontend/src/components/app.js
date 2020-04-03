import React from 'react';
import ProfileContainer from './profile/profile_container'
import "./app.css"
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container'
import CafeContainer from './cafe/cafe_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RetryContainer from './retry/retry_container';
import Errors from './yelpErrors/errors_container';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      {/* <LoginFormContainer/> */}

      <Switch>
        <Route exact path="/retry" component={RetryContainer} />
        <Route exact path="/errors" component={Errors} />
        <Route exact path="/" component={SplashContainer} />
        <Route path="/cafe" component={CafeContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/user" component={ProfileContainer}/>
      </Switch>
    </div>
  );
};

export default App;