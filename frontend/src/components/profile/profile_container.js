
import { connect } from 'react-redux';
import Profile from './profile';
import {logout, login, updateProfileAct, updateUserPreferences} from '../../actions/session_actions';
import {getUser} from '../../actions/user_actions'
import {updatedUser} from '../../actions/updated_user_actions';

const mapStateToProps = state => {
    // debugger
    return({
    user: state.session.user,
    updatedUser: state.session.updatedUser,
    // userUpdated:state.session.data.user,
    test: "test"
});
};

const mapDispatchToProps = dispatch => ({
    processForm: () => dispatch(logout()),
    getUser: (id) => dispatch(getUser(id)),
    login: (user) =>dispatch(login(user)),
    updateProfileAct: (id,user)=> dispatch(updateProfileAct(id,user)),
    getUpdatedUser: (id) => dispatch(updatedUser(id)),
    // getPreferences: () => dispatch
    updateUserPreferences: (id, preferences) => dispatch(updateUserPreferences(id, preferences))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)