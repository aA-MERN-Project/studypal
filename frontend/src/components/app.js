import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container'
import CafeContainer from './cafe/cafe_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import { Switch, Route } from "react-router";
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
      </Switch>
    </div>
  );
};

export default App;