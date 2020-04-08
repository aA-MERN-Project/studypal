import { connect } from 'react-redux';
import { fetchCafeByFilters } from '../../actions/cafe_actions';
import Splash from './splash';
import { getFilters } from '../../actions/filter_actions';
import {updatedUser} from '../../actions/updated_user_actions';

const mSTP = state => ({
    cafes: state.entities.cafes,
    filters: state.entities.filters,
    user: state.session.user,
    updatedUser: state.session.updatedUser,
    isAuthenticated: state.session.isAuthenticated

})

const mDTP = dispatch => {
    return {
      getUpdatedUser: (id) => dispatch(updatedUser(id)),
      fetchCafeByFilters: filters => dispatch(fetchCafeByFilters(filters)),
      getFilters: filters => dispatch(getFilters(filters)),
      
    };
  };

export default connect(
    mSTP, mDTP
)(Splash);