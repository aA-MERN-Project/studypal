import { connect } from 'react-redux'
import { signup, clearErrors, login, logout} from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = state => {
    return{
    users:state.entities.users,
    errors: state.errors.session,
    formType: "Sign up",
    signedIn: state.session.isSignedIn,
    isAuthenticated: state.session.isAuthenticated
    }
};  

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    logInNewUser: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect (mapStateToProps, mapDispatchToProps)(SessionForm);
