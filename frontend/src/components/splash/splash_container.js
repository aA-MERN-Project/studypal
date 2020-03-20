import { connect } from 'react-redux';
import { fetchCafeByZipcode } from '../../actions/cafe_actions';
import Splash from './splash';
import { getFilters } from '../../actions/filter_actions';

const mSTP = state => ({
    cafes: state.entities.cafes,
    filters: state.entities.filters,

})

const mDTP = dispatch => {
    return {
      fetchCafeByZipcode: zipcode => dispatch(fetchCafeByZipcode(zipcode)),
      getFilters: filters => dispatch(getFilters(filters)),
    };
  };

export default connect(
    mSTP, mDTP
)(Splash);