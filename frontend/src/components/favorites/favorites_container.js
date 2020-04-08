import {connect} from 'react-redux'
import Favorites from './favorites'
import { updateFavorites, fetchFavorites } from "../../actions/session_actions";
import { fetchCurrCafe, fetchFavoriteCafeById } from "../../actions/cafe_actions"
import { openModal } from "../../actions/modal_actions";
import  {selectRandomCafe} from "../../util/filters_util"

const mSTP = (state) => {
// debugger
    return({
      user: state.session.user,
      favorites: state.session.favorites,
      yelpCafe: state.entities.yelpCafe
    })
};

const mDTP = (dispatch) => {

  return {
    updateFavorites: (id, data) => dispatch(updateFavorites(id,data)),
    fetchFavorites: id => dispatch(fetchFavorites(id)),
    fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    fetchFavoriteCafeById: id => dispatch(fetchFavoriteCafeById(id))

  };
};


export default connect(mSTP, mDTP)(Favorites); 