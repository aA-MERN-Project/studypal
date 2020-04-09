# StudyPal
[Live demo](https://studypal-sf.herokuapp.com/#/)

StudyPal recommends a study spot based on all cafes located within San Francisco. Built using the MERN stack and the Yelp and Google Maps APIs, StudyPal seeks to provide a simple and intuitive user interface where users roll for cafes based on various preference. 

![StudyPal Homepage](https://studypal-dev.s3-us-west-1.amazonaws.com/splash_screenshot.png)

## Technologies
* MongoDB
* Express
* ReactJS
* NodeJS
* Yelp Fusion API
* Google Maps API
* Figma

## Features
* Secure user authentication with password digests
* Profiles prepopulated with cafe preferences and user information
* Profile and preferences which allow user updates
* Yelp cafe data fetched by the Yelp Fusion API
* Cafe suggestions filtered by cafe preferences and user geolocation
* Cafe location displayed via the Google Maps API

![StudyPal Cafe](https://media.giphy.com/media/RLQQLfgpfL10NKOGCL/giphy.gif)

* Favorites
* Roll Cafe
* Search cafe by parameters
* Cafe status (number of rolls, etc)
* User auth
* Updating and saving profile preferences
* Updating and saving user information
* Mediaquery

## Code 

#### Prepopulated Cafe Preferences
An important part of the user profile is that they are able to save and retrieve their cafe preferences. Cafe preferences
are selected via radio buttons, each of which triggers a change in local state. When a user submits these changes,
the data in the local state is sent to and stored within MongoDB. To retrieve and display these changes, data is fetched
via an axios call and rendered accessible to local state via props. Each radio button checks whether its
corresponding state value is not equal to a default empty string and mark it if so, thus prepopulating a user's cafe 
preferences.

```javascript
    // Local state of profile which stores preferences
    this.state = {
        updated_user: props.updatedUser,       
        updatedProf: "false",
        user: this.props.user,        
        miles_away: null,
        hours_opened_left: this.props.user.hours_opened_left,
        free_wifi: this.props.user.free_wifi,
        credit_card: this.props.user.credit_card,
        noise_level: this.props.user.noise_level
    }
```

```javascript
    // Radio button which updates local state and checks whether it needs to be prefilled
    <label className="filter">
        <input
        className="checkbox"
        checked={this.state.miles_away === "3"}
        onChange={this.update("miles_away")}
        type="radio"
        name="miles"
        value="3"
        />
        3 miles
    </label>
```

