import { connect } from "react-redux";
import { selectRandomCafe, applyExtraFilters } from "../../util/filters_util"
import { clearCafes, rerollCafes, fetchYelpCafeById, fetchCurrCafe} from "../../actions/cafe_actions";
import { openModal, openSessionModal, closeSessionModal } from "../../actions/modal_actions";
import { updateFavorites, fetchFavorites } from "../../actions/session_actions";

import { applyTimeFilter } from '../../util/filters_util';

import Cafe from '../cafe/cafe';



const mapStateToProps = state => {


  let cafes = Object.values(state.entities.cafes);
  let filters = state.entities.filters;
  let filteredCafes = applyExtraFilters(cafes, filters);
  let randomCafe = selectRandomCafe(Object.values(state.entities.cafes))

  // let test = applyTimeFilter(cafes, filters);
   
  return {
    user: state.session.user,
    cafes: cafes,
    filteredCafes: filteredCafes,
    filters: filters,
    loading: state.loading.indexLoading,
    randomCafe: randomCafe,
    yelpCafe: state.entities.yelpCafe,
    loggedIn: state.session.isAuthenticated
  };

}
const mapDispatchToProps = dispatch => ({
  fetchFavorites: userId => dispatch(fetchFavorites(userId)),
  fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  openSessionModal: (modal, data) => dispatch(openSessionModal(modal, data)),
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  fetchYelpCafeById: id => dispatch(fetchYelpCafeById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);