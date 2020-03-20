import '../../reset.css'
import './profile.css'
import React from 'react'
import NavBar from '../navbar/navbar_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: props.user,
            // handle: props.user.handle,
            email: props.user.email
            
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        this.props.processForm(this.state)
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
          <div className="page">
            <NavBar/>
              <div className="profile-info-div">
                <div className="profile-info">
                  <div className="name">Name</div>
                  <div className="email">Email</div>
                  <div>Current Location</div>
                </div>
              </div>
            <br />
            <div className="outer-filter-box-div">
              <div className="filter-box-div">
                <div className="preferences">Saved Preferences</div>
                <div>
                  <div className="top-row">
                    <div className="top-mini-1">
                      <div className="within-select">Within: </div>
                      <form>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="0.5 miles" />
                          <span className="checkbox"></span>
                          0.5 miles
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="1 mile" />
                          <span className="checkbox"></span>
                          1 mile
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="3 miles" />
                          <span className="checkbox"></span>
                          3 miles
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="5 miles" />
                          <span className="checkbox"></span>
                          5 miles
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="10 miles" />
                          <span className="checkbox"></span>
                          10 miles
                        </label>
                      </form>
                    </div>

                      <div className="vertical-line"></div>

                    <div className="top-mini-2">
                      <div className="within-select">Open for the next: </div>
                      <form>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="1 hour" />
                          <span className="checkbox"></span>
                          1 hour
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="2 hours" />
                          <span className="checkbox"></span>
                          2 hours
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="3 hours" />
                          <span className="checkbox"></span>
                          3 hours
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="5 hours" />
                          <span className="checkbox"></span>
                          5 hours
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="8 hours" />
                          <span className="checkbox"></span>
                          8 hours
                        </label>
                      </form>
                    </div>
                  </div>
                  <br />
                  <div className="horizontal-line"></div>
                  <div className="bottom-row">
                    <div className="mini-1">
                      <div className="within-select-2">Free WiFi: </div>
                      <form >
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="true" />
                          <span className="checkbox"></span>
                          Yes
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="false" />
                          <span className="checkbox"></span>
                          No
                        </label>
                      </form>
                    </div>
                      <div className="vertical-line"></div>

                    <div className="mini-2">
                      <div className="within-select-2">Takes Credit Card: </div>
                      <form >
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="true" />
                          <span className="checkbox"></span>
                          Yes
                        </label>
                        <label className="filter">
                          <input className="checkbox" type="checkbox" name="false" />
                          <span className="checkbox"></span>
                          No
                        </label>
                      </form>
                    </div>

                      <div className="vertical-line"></div>
                    <div className="mini-3">
                      <div className="within-select-2">Noise Level: </div>
                      <form >
                        <label className="filter"> 
                          <input className="checkbox" type="checkbox" name="quiet" />
                          <span className="checkbox"></span>
                          Quiet
                        </label>
                        <label className="filter"> 
                          <input className="checkbox" type="checkbox" name="average" />
                          <span className="checkbox"></span>
                          Average
                        </label>
                        <label className="filter"> 
                          <input className="checkbox" type="checkbox" name="loud" />
                          <span className="checkbox"></span>
                          Loud
                        </label>
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