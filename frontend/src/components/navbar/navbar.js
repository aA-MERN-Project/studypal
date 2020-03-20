import '../../reset.css';
import './navbar.css';
import { Link, Redirect } from 'react-router-dom';
import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.loggedOut = this.loggedOut.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        // debugger;
        this.props.logout();
            // .then(this.props.history.push("login"));
        
    }

    loggedOut() {
        if (!this.props.loggedIn) {
            return (
                <div className="button-div">
                    <Link className="button" to="/login">Log In</Link>
                    <div className="vertical-line-navbar"></div>
                    <Link className="button" to="/signup">Sign Up</Link>
                </div>
            )
        }
    }

    loggedIn() {
        if (this.props.loggedIn) {
            return (
                <div className="button-div">
                    <Link className="button" to="/login">Log Out</Link>
                    <button onClick={this.handleLogout}>Log Out Button</button>
                </div>
                //needs to dispatch logout
            )
        }
    }

    render() {
        return(
            <div className="navbar">
                <h1 className="logo">Studypal</h1>
                    {this.loggedOut()}
                    {this.loggedIn()}
            </div>
        )

    }
}




export default NavBar