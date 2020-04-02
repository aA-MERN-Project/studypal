import { connect } from "react-redux";
import { selectRandomCafe, calculateDistance, applyExtraFilters } from "../../util/filters_util"
import { clearCafes, rerollCafes, fetchYelpCafeById } from "../../actions/cafe_actions";
import Cafe from '../cafe/cafe';



const mapStateToProps = state => {

  debugger

  let cafes = Object.values(state.entities.cafes);
  let filters = state.entities.filters;

  let filteredCafes = applyExtraFilters(cafes, filters);

  //Get random Yelp Cafe before coming into Props
  let randomCafe = selectRandomCafe(Object.values(state.entities.cafes))

   
  return {
    cafes: cafes,
    filteredCafes: filteredCafes,
    filters: filters,
    loading: state.loading.indexLoading,
    randomCafe: randomCafe,
    yelpCafe: state.entities.yelpCafe,
  };

}
const mapDispatchToProps = dispatch => ({
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  fetchYelpCafeById: id => dispatch(fetchYelpCafeById(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);