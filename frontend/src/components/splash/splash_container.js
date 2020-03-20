import { connect } from 'react-redux';
import { fetchCafeByZipcode } from '../../actions/cafe_actions';
import Splash from './splash';

const mSTP = state => ({
    cafes: state.entities.cafes,

})

const mDTP = dispatch => {
    return {
      fetchCafeByZipcode: zipcode => dispatch(fetchCafeByZipcode(zipcode)),
    };
  };

export default connect(
    mSTP, mDTP
)(Splash);