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

    componentDidMount() {
      this.props.getUser("5e8a59172f5ef608b05b6a0a")
    }

    handleLogout(){
         
        this.props.logout();
         
        this.props.history.push('/');
        
    }
                
    loggedOut() {
        if (
          (!this.props.loggedIn && this.props.location.pathname === "/") ||
          (!this.props.loggedIn && this.props.location.pathname === "/cafe") ||
          (!this.props.loggedIn && this.props.location.pathname === "/retry")
        ) {
          return (
            <div className="button-div-logout">
                {/* &emsp; */}
                <Link 
                  onClick={() => this.props.login({ email: this.props.demoUser.undefined.data.email, password: "password" })}
                  // onClick={() => console.log(this.props.demoUser.undefined.data.email)}
                  className="button" 
                  >
                  Demo User
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/login">
                  Log In
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/signup">
                  Sign Up
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="buttonCrew" to="/crew">The Crew</Link>
                {/* &emsp; */}
                <div className="vertical-line-navbar"></div>
                    &emsp;
                <a target="_blank" className="gitIconLink" href="https://github.com/aA-MERN-Project/studypal" >    
                  <img className="gitIconLink" alt="studypal github repo" src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"/>
                </a>
              </div>
          );
        } else if (
          !this.props.loggedIn &&
          this.props.location.pathname === "/crew"
        ) {
          return (
            <div className="button-div">
              <Link
                onClick={() =>
                  this.props.login({
                    email: this.props.demoUser.undefined.data.email,
                    password: "password",
                  })
                }
                className="button"
              >
                Demo User
              </Link>
              <div className="vertical-line-navbar"></div>
              <Link className="button" to="/login">
                Log In
              </Link>
              <div className="vertical-line-navbar"></div>
              <Link className="button" to="/signup">
                Sign Up
              </Link>
              <div className="vertical-line-navbar"></div>
              &emsp;
              <a
                target="_blank"
                className="gitIconLink"
                href="https://github.com/aA-MERN-Project/studypal"
              >
                <img
                  className="gitIconLink"
                  alt="studypal github repo"
                  src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
                />
              </a>
              {/* &emsp; */}
            </div>
          );
        }
    }

    loggedIn() {
        if ((this.props.loggedIn && this.props.location.pathname === "/user") || (this.props.loggedIn && this.props.location.pathname === "/favorites")) {
            return (
              <div className="button-div">
                <Link className="buttonCrew" to="/crew">
                  The Crew
                </Link>
                <div className="vertical-line-navbar"></div>
                <button className="button2" onClick={this.handleLogout}>
                  Log Out
                </button>
                <div className="vertical-line-navbar"></div>
                    <a target="_blank" className="gitIconLink" href="https://github.com/aA-MERN-Project/studypal" >    
                    <img className="gitIconLink" alt="studypal github repo" src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"/>
                    </a>
              </div>
            );
        } else if (this.props.loggedIn && this.props.location.pathname === "/retry") {
          return (
            <div className="button-div">
              <Link className="button" to="/user">
                Profile
                </Link>
              <div className="vertical-line-navbar"></div>
              <Link className="buttonCrew" to="/crew">
                The Crew
                </Link>
              <div className="vertical-line-navbar"></div>
              <button className="button2" onClick={this.handleLogout}>
                Log Out
                </button>
              {/* &nbsp; */}
              <div className="vertical-line-navbar"></div>
                &emsp;
              <a
                target="_blank"
                className="gitIconLink"
                href="https://github.com/aA-MERN-Project/studypal"
              >
                <img
                  className="gitIconLink"
                  alt="studypal github repo"
                  src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
                />
              </a>
            </div>
          );
        } else if (this.props.loggedIn &&this.props.location.pathname === "/crew")
                {
                 return (
                   <div className="button-div">
                     <Link className="button" to="/user">
                       Profile
                     </Link>
                     <div className="vertical-line-navbar"></div>
                     <button className="button2" onClick={this.handleLogout}>
                       Log Out
                     </button>
                     <div className="vertical-line-navbar"></div>
                     &emsp;
                     <a
                       target="_blank"
                       className="gitIconLink"
                       href="https://github.com/aA-MERN-Project/studypal"
                     >
                       <img
                         className="gitIconLink"
                         alt="studypal github repo"
                         src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
                       />
                     </a>
                   </div>
                 );
      } else if (this.props.loggedIn) {
        return (
          <div className="button-div">
            <Link className="button" to="/user">
              Profile
                </Link>
            <div className="vertical-line-navbar"></div>
            <Link className="buttonCrew" to="/crew">
              The Crew
                </Link>
            <div className="vertical-line-navbar"></div>
            <button className="button2" onClick={this.handleLogout}>
              Log Out
                </button>
            {/* &nbsp; */}
            <div className="vertical-line-navbar"></div>
                &emsp;
            <a
              target="_blank"
              className="gitIconLink"
              href="https://github.com/aA-MERN-Project/studypal"
            >
              <img
                className="gitIconLink"
                alt="studypal github repo"
                src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
              />
            </a>
          </div>
        );
      } 


    }

    render() {
        return(
            <div className="navbar">
                 <div className="logoCrew">
                    <Link className="logo" to="/">
                      <span className="logoText">Studypal&nbsp;&nbsp;</span> 
                      <span className="coffeeImgLogo">
                          <img className="coffeeImgLogo" src="https://studypal-dev.s3-us-west-1.amazonaws.com/coffee.png"/>
                      </span>
                    </Link>
                    
                 </div>
                {this.loggedOut()}
                {this.loggedIn()}
            </div>
        )

    }
}




export default withRouter(NavBar);