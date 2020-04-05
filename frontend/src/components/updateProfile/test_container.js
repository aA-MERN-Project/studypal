import { connect } from 'react-redux';
import {updateProfileAct} from '../../actions/session_actions';
import Test from './test';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        // errors: state.errors.updatedUser,
        user: state.session.user
    };
};

// const mapDispatchToProps = dispatch => ({
//     updateProfileAct: (id,user) => dispatch(updateProfileAct(id, user))
// });

export default connect(mapStateToProps, null)(Test);