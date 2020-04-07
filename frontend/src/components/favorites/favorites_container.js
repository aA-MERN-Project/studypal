import {connect} from 'react-redux'
import Favorites from './favorites'


const mSTP = (state) => ({
  cafes: state.entities.cafes,
  filters: state.entities.filters,
  // user: state.session.user
});

const mDTP = (dispatch) => {
  return {
    fetchCafeByFilters: (filters) => dispatch(fetchCafeByFilters(filters)),
    getFilters: (filters) => dispatch(getFilters(filters)),
  };
};


export default connect(mSTP, mDTP)(Favorites); 