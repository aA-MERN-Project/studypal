import NavBar from './navbar'
import { connect } from 'react-redux'
import {logout, login, demoLogin} from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
    // loading: state.loading.loginLoading
})

const mapDispatchToProps = dispatch => ({
    // demoLogin: user => dispatch(demoLogin(user)),
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)