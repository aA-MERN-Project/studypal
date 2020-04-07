import { connect } from "react-redux";
import { selectRandomCafe, applyExtraFilters } from "../../util/filters_util"
import { clearCafes, rerollCafes, fetchYelpCafeById } from "../../actions/cafe_actions";
import { openModal } from "../../actions/modal_actions";
import Cafe from '../cafe/cafe';



const mapStateToProps = state => {


  let cafes = Object.values(state.entities.cafes);
  let filters = state.entities.filters;
  let filteredCafes = applyExtraFilters(cafes, filters);
  let randomCafe = selectRandomCafe(Object.values(state.entities.cafes))

   
  return {
    user: state.session.user,
    cafes: cafes,
    filteredCafes: filteredCafes,
    filters: filters,
    loading: state.loading.indexLoading,
    randomCafe: randomCafe,
    yelpCafe: state.entities.yelpCafe,
  };

}
const mapDispatchToProps = dispatch => ({
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  fetchYelpCafeById: id => dispatch(fetchYelpCafeById(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);