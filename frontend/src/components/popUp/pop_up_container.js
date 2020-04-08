import { closePopUp } from '../../actions/pop_up_actions'
import { connect } from 'react-redux'
import PopUp from './pop_up'

const mapStateToProps = state => ({
    popUp: state.popUp
})

const mapDispatchToProps = dispatch => ({
    closePopUp: () => dispatch(closePopUp())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)