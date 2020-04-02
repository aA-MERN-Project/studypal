import NavBar from './navbar'
import { connect } from 'react-redux'
import {logout, login} from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)