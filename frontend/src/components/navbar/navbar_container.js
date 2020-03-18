import NavBar from './navbar'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, null)(NavBar)