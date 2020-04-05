import { connect } from 'react-redux';
import {clearErrors} from '../../actions/session_actions';
import Test from './test';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        // errors: state.errors.updatedUser,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);