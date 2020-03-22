import '../../reset.css';
import './profile.css';
import React from 'react';
import NavBar from '../navbar/navbar_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        // debugger;
        this.state = {
          user: props.user,
            // handle: props.user.handle,          
          miles_away: "",
          hours_opened_left: "",
          free_wifi: "",
          credit_card: "",
          noise_level: ""
          // user: props.user,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    componentDidMount(){
      debugger;
      this.setState({user:this.props.user});
    }

    componentWillReceiveProps(nextProps){
      debugger;
      this.setState({user:this.nextProps.user});
    }

  //   checkboxes1(num) {
  //     let checks = document.getElementsByClassName("checkbox")
  //     let arrChecks = Array.from(checks)
      
  //     let newArrChecks = arrChecks.map((check) => {
  //       if (arrChecks.indexOf(check) < 5) {
  //        return  check
  //       }
  //     })
      

  //     newArrChecks.forEach((check) => {
        
  //       if (check) {
  //         check.checked = false
  //       }
  //     })

  //     if (newArrChecks[num].checked === true) {
  //       newArrChecks[num].checked = false
  //     } else {
  //       newArrChecks[num].checked = true
  //     }
  //   }

  //   checkboxes2(num) {
  //     let checks = document.getElementsByClassName("checkbox")
  //     let arrChecks = Array.from(checks)

  //     let newArrChecks = arrChecks.map((check) => {
  //       if (arrChecks.indexOf(check) > 4 && arrChecks.indexOf(check) < 10) {
  //         return check
  //       } else {
  //         return check.checked = true
  //       }
  //     })

  //     newArrChecks.forEach( (check) => {
  //       if (check) {
  //         check.checked = false
  //       }
  //     })


  //     if (newArrChecks[num].checked === true) {
  //       newArrChecks[num].checked = false
  //     } else {
  //       newArrChecks[num].checked = true
  //     }
  //   }

  // checkboxes3(num) {
  //   let checks = document.getElementsByClassName("checkbox")
  //   let arrChecks = Array.from(checks)
  //   let newArrChecks = arrChecks[10]

  //   newArrChecks.forEach((check) => {

  //     if (check) {
  //       check.checked = false
  //     }
  //   })

  //   if (newArrChecks[num].checked === true) {
  //     newArrChecks[num].checked = false
  //   } else {
  //     newArrChecks[num].checked = true
  //   }
  // }

  // checkboxes4(num) {
  //   let checks = document.getElementsByClassName("checkbox")
  //   let arrChecks = Array.from(checks)

  //   let newArrChecks = arrChecks[11]

  //   newArrChecks.forEach((check) => {
  //     if (check) {
  //       check.checked = false
  //     } 
  //   })

  //   if (newArrChecks[num].checked === true) {
  //     newArrChecks[num].checked = false
  //   } else {
  //     newArrChecks[num].checked = true
  //   }
  // }

  // checkboxes5(num) {
  //   let checks = document.getElementsByClassName("checkbox")
  //   let arrChecks = Array.from(checks)

  //   let newArrChecks = arrChecks[12]

  //   newArrChecks.forEach((check) => {
  //     if (check) {
  //       check.checked = false
  //     }
  //   })

  //   if (newArrChecks[num].checked === true) {
  //     newArrChecks[num].checked = false
  //   } else {
  //     newArrChecks[num].checked = true
  //   }
  // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.name
        })
    }


    render() {
      let username ;
      let email;
      let zipcode;
      if (this.state.user){
        username = this.state.user.handle;
        email = this.state.user.email;
        zipcode = this.state.user.zipcode;
      }else{
        username = "";
        email = "";
        zipcode = "";
      }
      //  const {user} = this.state.user;
      //  let username = user ? user.handle : "";
      //  let email = user ? user.email : "";
      //  let zipcode = user ? user.zipcode : ""; 

        return (
          <div className="page">
            <NavBar/>
              <div className="profile-info-div">
                <div className="profile-info">
                    <div className="name">{username}</div>
                    <div className="email">{email}</div>
                    <div>Current Zipcode {zipcode}</div>
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
                            // onClick={() => this.checkboxes1(0)}
                            onChange={this.update("miles_away")}
                            className="checkbox-miles"
                            type="checkbox"
                            name="0.5 miles"
                          />
                          0.5 miles
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes1(1)}
                            onChange={this.update("miles_away")}
                            className="checkbox-miles"
                            type="checkbox"
                            name="1 mile"
                          />
                          1 mile
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes1(2)}
                            onChange={this.update("miles_away")}
                            className="checkbox-miles"
                            type="checkbox"
                            name="3 miles"
                            
                          />
                          3 miles
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes1(3)}
                            onChange={this.update("miles_away")}
                            className="checkbox-miles"
                            type="checkbox"
                            name="5 miles"
                          />
                          5 miles
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes1(4)}
                            onChange={this.update("miles_away")}
                            className="checkbox-miles"
                            type="checkbox"
                            name="10 miles"
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
                            // onClick={() => this.checkboxes2(5)}
                            onChange={this.update("hours_opened_left")}
                            className="checkbox-hours"
                            type="checkbox"
                            name="1 hour"
                          />
                          1 hour
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(6)}
                            onChange={this.update("hours_opened_left")}
                            className="checkbox-hours"
                            type="checkbox"
                            name="2 hours"
                          />
                          2 hours
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(7)}
                            onChange={this.update("hours_opened_left")}
                            className="checkbox-hours"
                            type="checkbox"
                            name="3 hours"
                          />
                          3 hours
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(8)}
                            onChange={this.update("hours_opened_left")}
                            className="checkbox-hours"
                            type="checkbox"
                            name="5 hours"
                          />
                          5 hours
                        </label>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(9)}
                            onChange={this.update("hours_opened_left")}
                            className="checkbox-hours"
                            type="checkbox"
                            name="8 hours"
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
                      {/* <div className="within-select-2">Free WiFi: </div> */}
                      <form>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(10)}
                            onChange={this.update("free_wifi")}
                            className="checkbox-wifi"
                            type="checkbox"
                            name="true"
                          />
                          Free WiFi
                        </label>
                        {/* <label className="filter">
                          <input
                            onChange={this.update("free_wifi")}
                            className="checkbox"
                            type="checkbox"
                            name="false"
                          />
                          No
                        </label> */}
                      </form>
                    </div>
                    <div className="vertical-line"></div>

                    <div className="mini-2">
                      {/* <div className="within-select-2">Takes Credit Card: </div> */}
                      <form>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(11)}
                            onChange={this.update("credit_card")}
                            className="checkbox-credi"
                            type="checkbox"
                            name="true"
                          />
                          Takes Credit Card
                        </label>
                        {/* <label className="filter">
                          <input
                            onChange={this.update("noise_level")}
                            className="checkbox"
                            type="checkbox"
                            name="false"
                          />
                          No
                        </label> */}
                      </form>
                    </div>

                    <div className="vertical-line"></div>
                    <div className="mini-3">
                      {/* <div className="within-select-2">Noise Level: </div> */}
                      <form>
                        <label className="filter">
                          <input
                            // onClick={() => this.checkboxes2(12)}
                            onChange={this.update("noise_level")}
                            className="checkbox-noise"
                            type="checkbox"
                            name="true"
                          />
                          Quiet Environment
                        </label>
                        {/* <label className="filter">
                          <input
                            onChange={this.update("noise_level")}
                            className="checkbox"
                            type="checkbox"
                            name="average"
                          />
                          Average
                        </label>
                        <label className="filter">
                          <input
                            onChange={this.update("noise_level")}
                            className="checkbox"
                            type="checkbox"
                            name="loud"
                          />
                          Loud
                        </label> */}
                      </form>
                    </div>
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