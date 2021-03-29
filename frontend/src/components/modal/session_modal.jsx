import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { signup,logout, login, clearErrors } from '../../actions/session_actions';
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
        errors: state.errors.session,
        signedIn: state.session.isSignedIn,
        isAuthenticated: state.session.isAuthenticated
    };
};


const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        closeModal: () => dispatch(closeSessionModal()),
        openModal: (type, data) => dispatch(openSessionModal(type, data)),
        signup: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),

    };
};



class SessionModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handle: '',
            email: '',
            password: '',
            password2: '',
            zipcode: '',
            errors: {},
            users: this.props.users
        };
        this.renderErrors = this.renderErrors.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

        this.loginModal = this.loginModal.bind(this);
        this.signupModal = this.signupModal.bind(this);
        this.logClose = this.logClose.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.switchFromLogin = this.switchFromLogin.bind(this);
        this.switchFromSignup = this.switchFromSignup.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        let user = {
            email: this.state.email,
            password: this.state.password,
            handle: this.state.handle,
            zipcode: this.state.zipcode
        };
        if(this.props.signedIn != prevProps.signedIn) {
            this.props.login({email: user.email, password: user.password})
                .then(this.props.closeModal())
        } else if (this.props.isAuthenticated === true) {
            return null
        }
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleLogin() {
        this.props.login({ email: this.state.email, password: this.state.password });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
            zipcode: this.state.zipcode
        };
        this.props.signup(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                Object.values(this.props.errors).map((err) => (
                    <li>
                        {err}
                    </li>
                )
                )
            )
        } else {
            return (
                null
            )
        }
    }

    logClose() {
        this.props.closeModal();
        this.props.login({ email: this.props.demoUser.undefined.data.email, password: "password" })
    }

    switchFromLogin() {
        this.props.openModal("signup");
        this.setState({
            handle: '',
            email: '',
            password: '',
            password2: '',
            zipcode: '',
            errors: {},
        });
        this.props.clearErrors();
    }

    switchFromSignup() {
        this.props.openModal("login");
        this.setState({
            handle: '',
            email: '',
            password: '',
            password2: '',
            zipcode: '',
            errors: {},
        });
        this.props.clearErrors();
    }

    loginModal() {
        return (
            <div className="login-page-modal" id="signup-page-modal">
                <div id="signup-pic-div2" className="left-div-signup">
                    <img
                        id="signup-pic2"
                        src={
                            "https://segmed-dev.s3-us-west-1.amazonaws.com/studypal/new_top_left.png"
                        }
                    />
                </div>
                    <form onClick={(e) => e.stopPropagation()} className="modal-signup-form" onSubmit={this.handleLogin}>
                        <div id="welcome-back-modal" className="welcome-studypal">Welcome Back</div>
                        
                        <div className="signup-or-login">
                            <div id="create-account-modal" className="create-account-login">Login</div>
                            <div id="or" className="create-account-login"> or </div>
                            <span id="login-account-modal" className="create-account-login" onClick={() => this.switchFromLogin()}>Sign Up</span>

                        </div>

                        <div className="form-input-div">
                            <label className="form-labels">
                                Email
                            <input
                                    className="input-box-email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update("email")}
                                />
                                <div className="horizontal-line-session"></div>
                            </label>
                        </div>
                        <div className="form-input-div">
                            <label className="form-labels">
                                Password
                            <input
                                    className="input-box-password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update("password")}
                                />
                                <div className="horizontal-line-session"></div>
                            </label>
                        </div>
                        <div className="errors">
                            <ul className="session-errors">{this.renderErrors()}</ul>
                        </div>
                        <div className="l-s-button-div">
                            <div className="login-signup-button">
                                Login
                            </div>
                        </div>
                        <div className="modal-demo-login" onClick={() => { this.logClose() }}>
                            Demo Login
                        </div>
                    </form>
            </div>
        )
    }
    

    signupModal() {
        return (
            <div id="signup-page-modal">
                    <form onClick={(e) => e.stopPropagation()} className="modal-signup-form" onSubmit={this.handleSubmit}>
                            <div id="welcome-studypal-modal" className="welcome-studypal">Welcome to StudyPal</div>
                            <div className="signup-or-login">
                                <div id="create-account-modal" className="create-account-login">Sign Up </div>
                                <div id="or" className="create-account-login"> or </div>
                                <span id="login-account-modal" className="create-account-login" onClick={() => this.switchFromSignup()}> Login</span>
                            </div>
                            <div className="form-input-div">
                                <label className="form-labels">
                                    Username
                                <input
                                        className="input-box-email"
                                        type="text"
                                        value={this.state.handle}
                                        onChange={this.update("handle")}
                                    />
                                    <div className="horizontal-line-session"></div>
                                </label>
                            </div>
                            <div className="form-input-div">
                                <label className="form-labels">
                                    Email
                                <input
                                        className="input-box-email"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update("email")}
                                    />
                                    <div className="horizontal-line-session"></div>
                                </label>
                            </div>
                            <div className="form-input-div">
                                <label className="form-labels">
                                    Password
                                <input
                                        className="input-box-email"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update("password")}
                                    />
                                    <div className="horizontal-line-session"></div>
                                </label>
                            </div>
                            <div className="form-input-div">
                                <label className="form-labels">
                                    Confirm Password
                                <input
                                        className="input-box-email"
                                        type="password"
                                        value={this.state.password2}
                                        onChange={this.update("password2")}
                                    />
                                    <div className="horizontal-line-session"></div>
                                </label>
                            </div>
                            <div className="form-input-div">
                                <label className="form-labels">
                                    Zipcode
                                <input
                                        className="input-box-email"
                                        type="zipcode"
                                        value={this.state.zipcode}
                                        onChange={this.update("zipcode")}
                                    />
                                    <div className="horizontal-line-session"></div>
                                </label>
                            </div>
                            <div className="errors">
                                <ul className="session-errors">{this.renderErrors()}</ul>
                            </div>
                            <div className="l-s-button-div">
                                <div className="login-signup-button">
                                    Sign Up
                                </div>
                            </div>
                        </form>
                    <div id="signup-pic-div" className="right-div-signup">
                        <img
                            id="signup-pic"
                            src={
                                "https://segmed-dev.s3-us-west-1.amazonaws.com/studypal/top-right.png"
                            }
                        />
                    </div>
            </div>
        )
    
    }


    render() {
        if (!this.props.modal) {
            return null
        }
        let selectedModal = null;
        
        if (this.props.modal === "login") selectedModal = this.loginModal();
        if (this.props.modal === "signup") selectedModal = this.signupModal();

        return (
            <div className="modal-session-backdrop" onClick={() => this.props.closeModal()}>
                {selectedModal}
            </div>
        );
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SessionModal));