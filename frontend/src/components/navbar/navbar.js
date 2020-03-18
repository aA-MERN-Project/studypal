import { Link } from 'react-router-dom'

const loggedOut = () => {
    if (!this.props.loggedIn) {
        return (
            <div>
                <Link  className="button" to="/login">Log In</Link>
                <Link className="button" to="/signup">Sign Up</Link>
            </div>
        )
    }
}

const loggedIn = () => {
    if (this.props.loggedIn) {
        return (
            <button >Log Out</button>
            //needs to dispatch logout
        )
    }
}

const NavBar = () => {
    return(
        <div className="navbar">
            <h1 className="logo">Studypal</h1>
            {loggedOut()}
            {loggedIn()}
        </div>
    )
}

export default NavBar