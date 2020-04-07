import {connect} from 'react-redux'
import Favorites from './favorites'
import { updateFavorites, fetchFavorites } from "../../actions/session_actions";



const mSTP = (state) => ({
    
    user: state.session.user,
    favorites: state.session.favorites,
 
});

const mDTP = (dispatch) => {


    
  return {
    
    updateFavorites: (id, data) => dispatch(updateFavorites(id,data)),
    fetchFavorites: id => dispatch(fetchFavorites(id))

  };
};


export default connect(mSTP, mDTP)(Favorites); 