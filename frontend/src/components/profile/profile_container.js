import { connect } from 'react-redux';
import Profile from './profile';
import {logout, updateUserPreferences} from '../../actions/session_actions';

const mapStateToProps = state => {
    // debugger
    return({
    user: state.session.user
});
};

const mapDispatchToProps = dispatch => ({
    processForm: () => dispatch(logout()),
    updateUserPreferences: (id, preferences) => dispatch(updateUserPreferences(id, preferences))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)