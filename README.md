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

#### Dynamic Prepopulating Profile Preferences
Another important part of user profile is that user is able to see their information (username, email, and zipcode) displayed after on the profile page (/user) after login. User can choose to update one or more fields of their user profile. User can choose any email besides currently existing emails of other users in the database. When user clicks on the "update profile" button, user id from props is used via an axios call to find the user with the corresponding id in the MongoDB, validations are performed on form data, and that user is then updated with form data in the MongoDB.  

The update form is prepopulated with their existing data in the database. After user logs in, the user information (and corresponding id) is stored in the session slice of state, which is passed to the component through props. After the component mounts, the app uses the user id to grab the user and corresponding information from the backend via an axios call. This information is used to prepopulate the user profile both on display and in the update form. When user updates their profile information, it is reflected in the username, email, and zipcode displayed on the page. The form is a child component of the profile page; in order to trigger a rerender of the parent page, the parent component passes down a handler function that sets parent state) whenever the form is updated. This triggers the lifecycle method "componentDidUpdate" in the parent component, which retrieves updated user information using the user id (which does not change) from the backend using an axios call; thus the profile information is always displays the most updated information. The splash page "Welcome, username!" message is written with similar logic and changes whenever user updates their profile.


```javascript
   //checks whether updatedUser from props is defined. If so, grabs the username, email, and 
   //zipcode from updated user
     render() {
          let username;
          let email;
          let zipcode;
          if (this.props.updatedUser){
            username = this.props.updatedUser.handle;
            email = this.props.updatedUser.email;
            zipcode = this.props.updatedUser.zipcode;
          }else{
            username = "";
            email = "";
            zipcode = "";
          }
```

```javascript
      //when component is updated (i.e. user presses update profile), this function is triggered to grab
      //most updated information for that user from backend
      componentDidUpdate(prevProps, prevState){
      if(prevProps.user !== this.props.user){
         if(this.props.user.id){
            this.props.getUpdatedUser(this.props.user.id);
         }else{
            this.props.getUpdatedUser(this.props.user._id);
         }   
      }
```

