import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import { Switch, Route } from "react-router";
import {Switch, Route} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginFormContainer}/>
      <Route exact path="/signup" component={SignupFormContainer}/>

    </Switch>
  </div>
);

export default App