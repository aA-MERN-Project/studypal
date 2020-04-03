import '../../reset.css';
import './navbar.css';
import { Link, Redirect, withRouter} from 'react-router-dom';
import React from 'react';
// import LoginLoadingPage from './login_loading'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.loggedOut = this.loggedOut.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
        this.handleLogout = this.handleLogout.bind(this);
        // this.demoLogin = this.demoLogin.bind(this);
    }

    handleLogout(){
         
        this.props.logout();
         
        this.props.history.push('/');
        
    }

    // demoLogin(idx){
    //     let inputEmail = document.getElementsByClassName("input-box-email");
    //     let inputEmailText = "ryan@gmail.com";
    //     let indexEmail = idx;
    //     // let inputPassword = document.getElementsByClassName("input-box-password");
    //     // let inputPasswordText = "password";
    //     // let indexPassword = 0;

    //     if (indexEmail <= inputEmailText.length) {
    //         inputEmail.value = inputEmailText.substr(0, indexEmail++);
    //         setTimeout(this.demoLogin(indexEmail), 50);
    //     }

    //     // if (indexPassword <= inputPasswordText.length) {
    //     //     inputPassword.value = inputPasswordText.substr(0, indexPassword++);
    //     //     setTimeout(this.demoLogin(), 50);
    //     // }

    //     // this.props.login({ email: "ryan@gmail.com", password: "password" });
    // }
                
    loggedOut() {
        if (!this.props.loggedIn) {
            return (
              <div className="button-div">
                {/* <Link
                  className="button"
                  onClick={() =>
                    this.props.login({
                      email: "ryan@gmail.com",
                      password: "password"
                    })
                  }
                >
                  Demo
                </Link> */}
                <Link 
                  onClick={() => this.props.login({ email: "ryan@gmail.com", password: "password" })}
                  // to="user"
                  className="button" 
                  >
                  Demo
                </Link>
                {/* <Link className="button" to="/user">Demo</Link> */}
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/login">
                  Log In
                </Link>
                <div className="vertical-line-navbar"></div>
                <Link className="button" to="/signup">
                  Sign Up
                </Link>
              </div>
            );
        }
    }

    loggedIn() {
        if (this.props.loggedIn) {
            return (
                <div className="button-div">
                    {/* <Link className="button" to="/login">Log Out</Link> */}
                    <Link className="button" to="/user">Profile</Link>
                    <div className="vertical-line-navbar"></div>
                    <button className="button2" onClick={this.handleLogout}>Log Out</button>
                </div>
            )
        }
    }

    render() {
      // if(this.props.loading) {
      //   return (<LoginLoadingPage />)
      // }
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