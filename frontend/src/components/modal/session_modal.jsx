import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';
import { closeSessionModal, openSessionModal } from "../../actions/modal_actions";
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./session_modal.scss";

const mapStateToProps = state => {
    return {
        user: state.session.user,
        favorites: state.session.favorites,
        modal: state.sessionModal.modal,
        data: state.modal.data,
        yelpCafe: state.entities.yelpCafe,
        currCafe: state.entities.currCafe,
        demoUser: state.entities.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        closeModal: () => dispatch(closeSessionModal()),
        openModal: (type, data) => dispatch(openSessionModal(type, data)),
    };
};



function SessionModal(props){




    if (!props.modal) {
        return null
    }

    const loginModal = (
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            Login Modal
            <br/>
            <Link
                onClick={() => {

                    props.closeModal();
                    props.login({ email: props.demoUser.undefined.data.email, password: "password" })}
                
                }
                // onClick={() => console.log(this.props.demoUser.undefined.data.email)}
               
            >
                Demo User
            </Link>
            <br/>

            <span onClick={() => props.openModal("signup")}>Back to Signup Modal Button</span>
        </div>
    
    )

    const signupModal = (
        <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            Signup Modal

            <br/>
            <span onClick={() => props.openModal("login")}>Log In Modal Button</span>

        </div>

    )


    let selectedModal = null;

    if (props.modal === "login") selectedModal = loginModal;
    if (props.modal === "signup") selectedModal = signupModal;
    


    return (
        <div className="modal-session-backdrop" onClick={props.closeModal}>
            {selectedModal}
        </div>
    );



}


export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);