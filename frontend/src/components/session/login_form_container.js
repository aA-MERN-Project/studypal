import { connect } from 'react-redux';
import { login, clearErrors, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
    errors: state.errors.session,
    formType: "Log in",
    signedIn: state.session.isSignedIn,
    isAuthenticated: state.session.isAuthenticated,
    demoUser: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    logInNewUser: user => dispatch(login(user))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);