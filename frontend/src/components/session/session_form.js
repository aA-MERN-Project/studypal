import React from 'react';
import {withRouter} from 'react-router-dom';
import './signup_form.css'
import './login_form.css'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handle: '',
            email: '',
            password: '',
            password2: '',
            zipcode: '',
            errors: {},
            users: props.users
        };
        this.renderErrors = this.renderErrors.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.signup = this.signup.bind(this);
        this.login =this.login.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.formType === "Sign up"){
            if(nextProps.signedIn === true){
                console.log("SUCCESS");
            }
            this.setState({errors: nextProps.errors});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
            zipcode: this.state.zipcode
        };
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        if (this.props.errors){
            return(
                Object.values(this.props.errors).map((err) => (
                    <li>
                        {err}
                    </li>
                )
            )
        )
            
        }else{
            return(
                <div></div>
            )
        }
        
    }

    login() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label>Password
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                    </div>
                    <br/>
                    <button>{this.props.formType}</button>
                </form>
                <div>
                    <ul>
                        {this.renderErrors()}
                    </ul>
                </div>
            </div>
        )
    }

    signup() {
        return (
          <div className="signup-page-div">
            <div className="signup-div">
              <form className="left-div-signup" onSubmit={this.handleSubmit}>
                <div className="signup-form-div">
                  <div className="welcome-studypal">Welcome to StudyPal</div>
                  <div>Create a new account</div>
                  <div>
                    <label>
                      Username
                      <input
                        type="text"
                        value={this.state.handle}
                        onChange={this.update("handle")}
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <label>
                      Email
                      <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <label>
                      Password
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <label>
                      Confirm Password
                      <input
                        type="password"
                        value={this.state.password2}
                        onChange={this.update("password2")}
                      />
                    </label>
                  </div>
                  <br />
                  <div>
                    <label>
                      Zipcode
                      <input
                        type="zipcode"
                        value={this.state.zipcode}
                        onChange={this.update("zipcode")}
                      />
                    </label>
                  </div>
                  <button>{this.props.formType}</button>
                </div>
              </form>
            </div>

            <div className="right-div-signup">
                <div >image</div>
            </div>
            <div>
                <ul>{this.renderErrors()}</ul>
            </div>
          </div>
        );
    }

    render() {
        return this.props.formType === "Log in" ? this.login() : this.signup()
    }
};

export default SessionForm;
