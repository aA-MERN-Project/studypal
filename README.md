# StudyPal
[Live demo](https://studypals-sf.herokuapp.com/#/)

StudyPal recommends a study spot based on all cafes located within San Francisco. Built using the MERN stack and the Yelp and Google Maps APIs, StudyPal seeks to provide a simple and intuitive user interface where users roll for cafes based on various preferences. 

![StudyPal Homepage](/frontend/public/splash.png)

## Technologies
* MongoDB
* Express
* ReactJS
* NodeJS
* Yelp Fusion API
* Google Maps API
* Figma

## Features
<!-- * Secure user authentication using bcrypt for password encryption; errors render when appropriate
* Profile are prepopulated with cafe preferences and user information
* Profile and preferences which allow user updates
* Cafe randomly selected based upon preferences
* Logged in user can favorite and unfavorite a cafe; user can see favorited cafe index page
* User can choose app to randomly roll a cafe from their favorited cafes
* Cafe page has a pop up modal that shows more pictures of cafe, has information about cafe status/statistics 
* Yelp cafe data fetched by the Yelp Fusion API
* Cafe suggestions filtered by cafe preferences and user geolocation
* Cafe location displayed via the Google Maps API -->

<!-- ![StudyPal Cafe](https://media.giphy.com/media/RLQQLfgpfL10NKOGCL/giphy.gif) -->

* Cafe Features
* User Features
* Favorites Feature
* Google Maps API
* AWS S3 & Image Uploading
* Mediaqueries

## Code 

#### User Auth
In User Auth, user (and all resources) have a Mongoose model with schema. Routes are set up in the backend to register new users and login existing users. Information from the login and signup forms are sent to the backend through axios calls. In the backend routes, validations (including email uniqueness and number/letter requirements) are performed. For signup, the app uses bcrypt to salt and hash new user's password before storing it in the database and saving the user. For login, we set up  a backend route that use bcrypt to compare the user inputed password with the salted and hashed password in the database. Both login and register request returns a signed web token to "sign user in" on the frontend. To persist user, we set the signed web token in local storage under key "jwtToken" on the client side; therefore, user remains sigend in through refresh. 

Users are allowed to create accounts, securely sign up, and log in. Errors render when validations do not pass, user is not found (login), and on sign up when username already exists in database. 



![signup](/frontend/public/signup.png)




```javascript
    //part of the login route
    //Finding a user by email. If user is found, then bcrypt compares password sent back with user's encrypted password 
    User.findOne({email})
        .then(user => {
            //if not user is found, send back an error under email key   
            if(!user){
                errors.email = "User not found";
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email,
                            zipcode: user.zipcode,
                            miles_away: user.miles_away,
                            hours_opened_left: user.hours_opened_left,
                            free_wifi: user.free_wifi,
                            credit_card: user.credit_card,
                            noise_level: user.noise_level
                        };
                        //
         
```

#### Prepopulated Cafe Preferences
An important part of the user profile is that they are able to save and retrieve their cafe preferences. Cafe preferences
are selected via radio buttons, each of which triggers a change in local state. When a user submits these changes,
the data in the local state is sent to and stored within MongoDB. To retrieve and display these changes, data is fetched
via an axios call and rendered accessible to local state via props. Each radio button checks whether its
corresponding state value is not equal to a default empty string and mark it if so, thus prepopulating a user's cafe 
preferences.

![preferences](https://toasty-dev.s3-us-west-1.amazonaws.com/icons/preferences2.gif)


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


![user profile](/frontend/public/user_profile.png)


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
<!-- 
#### Media queries
This project uses media queries to make it user friendly and for a pleasing display from small laptop to big screens. Furthermore, we have made the 1) crew page and 2) cafe page also mobile and tablet friendly.  -->
