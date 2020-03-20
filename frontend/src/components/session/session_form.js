import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
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
        // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        // this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        // this.checkErrors = this.checkErrors.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        // debugger;
        let user = {
            email: this.state.email,
            password: this.state.password,
            handle: this.state.handle,
            zipcode: this.state.zipcode
        };
        //checking if user registered successfully, then log them in
        if(nextProps.signedIn === true){
            console.log("SUCCESS");
            this.props.logInNewUser(user)
                .then(this.props.history.push("user"));
       
        }else if(nextProps.isAuthenticated ===true){
          this.props.history.push("user");
        }
        
        this.setState({errors: nextProps.errors});
    }

    componentDidMount(){
        // debugger;
            this.props.clearErrors(); 
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
        if(this.props.formType==="Log in"){   
            
            this.props.processForm(user)
              // .then(this.checkErrors());
        }else{
            this.props.processForm(user);
        }   
    }

    // checkErrors(){
    //   if(this.props.errors.length > 0){      
    //     console.log("login errors, like no user with that email");
    //   }else if(this.props.errors.length === 0 ){
    //     debugger;
    //     this.props.history.push('user');
    //   }
    // }

    // handleSubmitSignup(e){
    //     e.preventDefault();
    //     let user = {
    //         email: this.state.email,
    //         handle: this.state.handle,
    //         password: this.state.password,
    //         password2: this.state.password2,
    //         zipcode: this.state.zipcode
    //     };
    //     this.props.processForm(user);
    // }

    // handleSubmitLogin(e){
    //     e.preventDefault();
    //     let user = {
    //         email: this.state.email,
    //         password: this.state.password
    //     };
    //     this.props.processForm(user);   
    // }

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
        // debugger;
        return this.props.formType === "Log in" ? this.login() : this.signup()
    }
};

export default withRouter(SessionForm);
