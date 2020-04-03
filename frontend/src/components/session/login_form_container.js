import { connect } from 'react-redux';
import { login, clearErrors, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
    errors: state.errors.session,
    formType: "Log in",
    signedIn: state.session.isSignedIn,
    isAuthenticated: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);