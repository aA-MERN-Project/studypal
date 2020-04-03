import '../../reset.css';
import './profile.css';
import React from 'react';

import NavBar from '../navbar/navbar_container';
// import Test from '../updateProfile/test_container';
import Test from '../updateProfile/test';
import TestContainer from '../updateProfile/test_container';
import $ from "jquery";




class Profile extends React.Component {
    constructor(props) {
        super(props);

        // debugger;
        this.state = {
          user: props.user,
          updated_user: props.updatedUser,
          // user2: props.getUser(props.user.id),
            // handle: props.user.handle,          
          miles_away: "",
          hours_opened_left: "",
          free_wifi: "",
          credit_card: "",
          noise_level: "",
          updatedProf: "false"
        };
        // debugger;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.clear = this.clear.bind(this);
        this.handler = this.handler.bind(this);

    }

    //to change the state once the profile gets updated
    handler(){
      // debugger;
      this.setState({updatedProf: "true"});
      // debugger;
      // this.props.getUser(this.state.user.id)
      //   .then(user => this.props.login(user));
      // this.setState({user:this.props.user});

    };

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    componentDidMount(){
      debugger;
      //session should populate with logged in user 
      //info once the component has mounted
      this.setState({user:this.props.user});
      if(this.props.user ){
        this.props.getUpdatedUser(this.props.user.id);
      }
      // debugger;
      // this.props.getUser(this.props.user.id);
      
    }

    componentDidUpdate(prevProps, prevState){
      debugger;
      if(prevProps.user !== this.props.user){
         this.props.getUpdatedUser(this.props.user._id);
      }
    }


    componentWillUpdate(nextProps, nextState){
      // if (nextState.updated ==="true"  && this.state.user !== nextState.user ) {
      //   this.props.getUser();
      debugger;
      if (!nextState.user === this.state.user){
        this.props.getUser(nextProps.user.id);
        this.props.updateProfileAct(nextProps.user.id, nextProps.user);
        // this.props.updatedUser(this.props.user.id);
      }
      if (!nextState.updatedUser === this.state.updatedUser){
        debugger;
        this.props.getUpdatedUser(nextProps.user.id);
        
      }
  
    }

    // componentDidUpdate(prevProps){
    //   if(this.props.user2 !== prevProps.user2){
    //     this.getUser(this.props.user.id)
    //   }
    //   debugger;
    // }

    // componentWillReceiveProps(nextProps){
    //   debugger;
    //   // this.setState({user:nextProps.user});
    //   this.setState({user:nextProps.user});
    //   debugger;
    //   this.props.login({email:nextProps.user.email, password:nextProps.user.password} );
    // }

    clear() {
      $("input[type=radio]:checked").prop("checked", false);
      

      this.setState({
        miles_away: "",
        hours_opened_left: "",
        free_wifi: "",
        credit_card: "",
        noise_level: "",
      });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
      
      let username ;
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
      };


      //  const {user} = this.state.user;
      //  let username = user ? user.handle : "";
      //  let email = user ? user.email : "";
      //  let zipcode = user ? user.zipcode : ""; 
        debugger;
        return (
          <div className="page">
            <NavBar/>
              <div className="profile-info-div">
                <div className="profile-info">
                  <div className="halfProfile1">
                      <div className="name">{username}</div>
                      <div className="email">{email}</div>
                      <div>Current Zipcode {zipcode}</div>
                  </div>
                  <div className="halfProfile2">
                    {/* <Test user={this.props.user} errors={this.props.errors} updateProfileAct ={this.props.updateProfileAct} handler={this.handler}/> */}
                    <TestContainer user={this.props.user} updatedUser = {this.props.updatedUser} errors={this.props.errors} updateProfileAct ={this.props.updateProfileAct} handler={this.handler}/>

                  </div>
                </div>
                

              </div>
            <br/>
            <div className="outer-filter-box-div">
              <div className="filter-box-div">
                <div className="preferences">Saved Preferences</div>
                <div>
                  <div className="top-row">
                    <div className="top-mini-1">
                      <div className="within-select">Within: </div>
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="0.5 miles"
                          />
                          0.5 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="1 mile"
                          />
                          1 mile
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="3 miles"
                          />
                          3 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="5 miles"
                          />
                          5 miles
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("miles_away")}
                            type="radio"
                            name="miles"
                            value="10 miles"
                          />
                          10 miles
                        </label>
                      </form>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="top-mini-2">
                      <div className="within-select">Open for the next: </div>
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="1 hour"
                          />
                          1 hour
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="2 hours"
                          />
                          2 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="3 hours"
                          />
                          3 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="5 hours"
                          />
                          5 hours
                        </label>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("hours_opened_left")}
                            type="radio"
                            name="hours"
                            value="8 hours"
                          />
                          8 hours
                        </label>
                      </form>
                    </div>
                  </div>
                  <br />
                  <div className="horizontal-line"></div>
                  <div className="bottom-row">
                    <div className="mini-1">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("free_wifi")}
                            type="radio"
                            value="true"
                          />
                          Free WiFi
                        </label>
                      </form>
                    </div>
                    <div className="vertical-line"></div>

                    <div className="mini-2">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("credit_card")}
                            type="radio"
                            value="true"
                          />
                          Takes Credit Card
                        </label>
                      </form>
                    </div>

                    <div className="vertical-line"></div>
                    <div className="mini-3">
                      <form>
                        <label className="filter">
                          <input
                            className="checkbox"
                            onChange={this.update("noise_level")}
                            type="radio"
                            value="true"
                          />
                          Quiet Environment
                        </label>
                      </form>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => this.clear()}>Clear All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="find-cafe-profile-div">
              <button className="find-cafe-profile">Find a Cafe</button>
            </div>
          </div>
        );
    }
}

export default Profile