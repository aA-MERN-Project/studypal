import { connect } from 'react-redux';
import { fetchCafeByFilters } from '../../actions/cafe_actions';
import Splash from './splash';
import { getFilters } from '../../actions/filter_actions';
import {updatedUser} from '../../actions/updated_user_actions';
import { getUser } from '../../actions/user_actions';

const mSTP = state => ({
    cafes: state.entities.cafes,
    filters: state.entities.filters,
    user: state.session.user,
    updatedUser: state.session.updatedUser,
    isAuthenticated: state.session.isAuthenticated,
    // demoUser: state.entities.users.undefined.data.email

})

const mDTP = dispatch => {
    return {
      getUpdatedUser: (id) => dispatch(updatedUser(id)),
      fetchCafeByFilters: filters => dispatch(fetchCafeByFilters(filters)),
      getFilters: filters => dispatch(getFilters(filters)),
      // getUser: id => dispatch(getUser(id))
    };
  };

export default connect(
    mSTP, mDTP
)(Splash);