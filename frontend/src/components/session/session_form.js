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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.signup = this.signup.bind(this);
        this.login =this.login.bind(this);
        
    }
    // render(){
    //     return(
    //         <div>Hello</div>
    //     )
    // }
    
    componentWillReceiveProps(nextProps){
        debugger;
        if(nextProps.formType === "Sign up"){
            if(nextProps.signedIn === true){
                console.log("SUCCESS");
                // this.props.history.push('/login');
            }
            this.setState({errors: nextProps.errors});
        }
    }

    componentDidMount(){
        this.props.clearErrors();
        // let user = {
        //     email: this.state.email,
        //     handle: this.state.handle,
        //     password: this.state.password,
        //     password2: this.state.password2,
        //     zipcode: this.state.zipcode
        // };
        // if (this.props.formType === "Sign up"){
        //     this.props.logInNewUser(user);
        // }
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
        // debugger;
        this.props.processForm(user);

       
        // this.props.processForm(user, this.props.history)
        //     .then(this.props.history.push("/api/users/test"));
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    
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
        if(this.props.isAuthenticated  || this.props.signedIn){
            return (
                <div>You're signed in
                <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        }else{
            return this.props.formType === "Log in" ? this.login() : this.signup()
        }
    }
};

export default SessionForm;