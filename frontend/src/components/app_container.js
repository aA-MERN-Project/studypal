import { connect } from "react-redux";
import App from './app';
import { logout } from '../actions/session_actions'

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mDTP)(App)