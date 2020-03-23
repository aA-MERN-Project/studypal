import { connect } from 'react-redux';
import { fetchCafeByFilters } from '../../actions/cafe_actions';
import Retry from './retry';
import { getFilters } from '../../actions/filter_actions';

const mSTP = state => ({
    cafes: state.entities.cafes,
    filters: state.entities.filters,

})

const mDTP = dispatch => {
    return {
      fetchCafeByFilters: filters => dispatch(fetchCafeByFilters(filters)),
      getFilters: filters => dispatch(getFilters(filters)),
      
    };
  };

export default connect(
    mSTP, mDTP
)(Retry);