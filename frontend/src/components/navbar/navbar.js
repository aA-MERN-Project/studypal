import '../../reset.css';
import './navbar.css';
import { Link, withRouter} from 'react-router-dom';
import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.loggedOut = this.loggedOut.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
         
        this.props.logout();
         
        this.props.history.push('/');
        
    }
                
    loggedOut() {
        if (!this.props.loggedIn) {
            // debugger
            return (
              <div className="button-div-logout">
                <Link className="buttonCrew" to="/crew">The Crew</Link>
                &emsp;
                <div className="vertical-line-navbar"></div>
                <Link 
                  onClick={() => this.props.login({ email: "ryan@gmail.com", password: "password" })}
                  className="button" 
                  >
                  Demo
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/login">
                  Log In
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/signup">
                  Sign Up
                </Link>
                &emsp;
                <div className="vertical-line-navbar"></div>
                    &emsp;
                    <a target="_blank" className="gitIconLink" href="https://github.com/aA-MERN-Project/studypal" >    
                    <img className="gitIconLink" alt="studypal github repo" src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"/>
                    </a>
              </div>
            );
        }
    }

    loggedIn() {
        if ((this.props.loggedIn && this.props.location.pathname === "/user") || (this.props.loggedIn && this.props.location.pathname === "/favorites")) {
            // debugger
            return (
                <div className="button-div">
                    <button className="button2" onClick={this.handleLogout}>Log Out</button>
                    <a target="_blank" className="gitIconLink" href="https://github.com/aA-MERN-Project/studypal" >    
                    <img className="gitIconLink" alt="studypal github repo" src="https://www.pngitem.com/pimgs/m/128-1280311_github-icon-white-png-github-icon-black-background.png"/>
                    </a>
                </div>
                
            )
        } else if (this.props.loggedIn) {
            return (
                <div className="button-div">
                    <Link className="buttonCrew" to="/crew">The Crew</Link>
                    &emsp;
                    <div className="vertical-line-navbar"></div>
                    <Link className="button" to="/user">Profile</Link>
                    <div className="vertical-line-navbar"></div>
                    <button className="button2" onClick={this.handleLogout}>Log Out</button>
                    &nbsp;
                    <a target="_blank" className="gitIconLink" href="https://github.com/aA-MERN-Project/studypal" >    
                        <img className="gitIconLink" alt="studypal github repo" src="https://studypal-dev.s3-us-west-1.amazonaws.com/white_github.jpg"/>
                    </a>
                </div>
            )
        }


    }

    render() {
        return(
            <div className="navbar">
                <Link className="logo" to="/">Studypal</Link>
                    {this.loggedOut()}
                    {this.loggedIn()}
            </div>
        )

    }
}




export default withRouter(NavBar);