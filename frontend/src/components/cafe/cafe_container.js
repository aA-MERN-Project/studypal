import { connect } from "react-redux";
import { clearCafes, rerollCafes, startLoadingSingleCafe } from "../../actions/cafe_actions";
import Cafe from '../cafe/cafe';



const mapStateToProps = state => {

    return {
        cafes: Object.values(state.entities.cafes),
        filters: state.entities.filters,
        loading: state.loading.indexLoading,
        reroll_loading: state.loading.detailLoading,
    };

}
const mapDispatchToProps = dispatch => ({
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  startLoadingSingleCafe: () => dispatch(startLoadingSingleCafe())
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
