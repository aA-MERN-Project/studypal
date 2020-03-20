import { connect } from "react-redux";
import { clearCafes } from "../../actions/cafe_actions";
import Cafe from '../cafe/cafe';

import {asArray} from '../../reducers/selectors'

const mapStateToProps = state => {
    debugger
    
    return {
        cafes: Object.values(state.entities.cafes)
    };



}
const mapDispatchToProps = dispatch => ({
  clearCafes: () => dispatch(clearCafes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
