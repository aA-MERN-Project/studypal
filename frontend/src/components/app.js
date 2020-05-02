import React from 'react';
import ProfileContainer from './profile/profile_container'
import "./app.css"
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_container'
import CafeContainer from './cafe/cafe_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RetryContainer from './retry/retry_container';
import Carousel from './carousel/carousel';
import Errors from './yelpErrors/errors_container';
import {Switch, Route} from 'react-router-dom';
import CrewPage from './team/team_page';
import FavoritesContainer from './favorites/favorites_container'
// import ReactDOM from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee, faHeart,} from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faCoffee, faHeart,);


const App = (props) => {
  return (
    <div className="app">
      {window.beforeunload = () => props.logout()}
      <Switch>
        <Route exact path="/retry" component={RetryContainer} />
        <Route exact path="/errors" component={Errors} />
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/crew" component={CrewPage}/>
        <Route exact path="/cafe" component={CafeContainer} />
        <Route path="/carousel" component={Carousel} />
        <ProtectedRoute
          exact
          path="/favorites"
          component={FavoritesContainer}
        />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/user" component={ProfileContainer} />
      </Switch>
    </div>
  );
};

export default App;