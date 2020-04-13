import NavBar from './navbar'
import { connect } from 'react-redux'
import {logout, login} from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password)),
    getUser: () => dispatch(getUser("5e8a59172f5ef608b05b6a0a"))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)