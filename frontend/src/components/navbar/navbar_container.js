import NavBar from './navbar'
import { connect } from 'react-redux'
import {logout, login} from '../../actions/session_actions';
import { getUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    demoUser: state.entities.users

})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password)),
    getUser: (id) => dispatch(getUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)