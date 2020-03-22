import { connect } from 'react-redux';
import Profile from './profile';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
    // debugger;
    return({
    user: state.session.user,
    test: "test"
});
};

const mapDispatchToProps = dispatch => ({
    processForm: () => dispatch(logout())
    // getPreferences: () => dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)