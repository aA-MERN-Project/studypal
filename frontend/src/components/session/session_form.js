import React from 'react';
import {withRouter} from 'react-router-dom';

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
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.signup = this.signup.bind(this);
        this.login =this.login.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        
    }
    
    componentWillReceiveProps(nextProps){
        debugger;
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
                .then(this.props.history.push("/api/users/test"));
            // this.props.history.push('/login');
        }
        
        this.setState({errors: nextProps.errors});
    }

    componentDidMount(){
        debugger;
        this.props.clearErrors();
        
    }

    handleSubmitSignup(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
            zipcode: this.state.zipcode
        };
        // debugger;
        this.props.processForm(user);
    }

    handleSubmitLogin(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.processForm(user);   
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        // debugger;
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
                <form onSubmit={this.handleSubmitLogin}>
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
            <div>
                <form onSubmit={this.handleSubmitSignup}>
                    
                    <div>
                        <label>Username
                            <input
                                type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                            />
                        </label>
                    </div>
                    <br />
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
                    <br />
                    <div>
                        <label>Confirm Password
                            <input
                                type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                            />
                        </label>
                    </div>
                    <br/>
                    <div>
                        <label>Zipcode
                            <input
                                type="zipcode"
                                value={this.state.zipcode}
                                onChange={this.update('zipcode')}
                            />
                        </label>
                    </div>
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

    render() {
        // debugger;
        return this.props.formType === "Log in" ? this.login() : this.signup()
    }
};

export default SessionForm;