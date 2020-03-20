import { connect } from "react-redux";
import { clearCafes, rerollCafes } from "../../actions/cafe_actions";
import Cafe from '../cafe/cafe';

import {asArray} from '../../reducers/selectors'

const mapStateToProps = state => {
     
    
    return {
        cafes: Object.values(state.entities.cafes),
        filters: state.entities.filters
    };



}
const mapDispatchToProps = dispatch => ({
  clearCafes: () => dispatch(clearCafes()),
  rerollCafes: cafes => dispatch(rerollCafes(cafes)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
