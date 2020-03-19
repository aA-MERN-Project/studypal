import '../../reset.css'
import './navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.loggedOut = this.loggedOut.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
    }

    loggedOut() {
        if (!this.props.loggedIn) {
            return (
                <div className="button-div">
                    <Link className="button" to="/login">Log In</Link>
                    <Link className="button" to="/signup">Sign Up</Link>
                </div>
            )
        }
    }

    loggedIn() {
        if (this.props.loggedIn) {
            return (
                <button className="button-div">Log Out</button>
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