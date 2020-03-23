import { connect } from "react-redux";
import { clearCafes, rerollCafes, fetchYelpCafeById } from "../../actions/cafe_actions";
import Cafe from '../cafe/cafe';




const mapStateToProps = state => {

    return {
        cafes: Object.values(state.entities.cafes),
        filters: state.entities.filters,
        loading: state.loading.indexLoading,
        yelp_cafe: state.entities.yelpCafe,
    };

}
const mapDispatchToProps = dispatch => ({
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  fetchYelpCafeById: id => dispatch(fetchYelpCafeById(id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
