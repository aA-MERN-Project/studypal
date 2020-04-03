import React from 'react';

class Test extends React.Component {
    
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            id: "",
            handle: "",
            email: "",
            zipcode: "",
            password: '',
            updated: "false"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this)

    }

    // componentWillUpdate(nextProps,nextState){
    //     debugger;
    //     if (!nextProps.user.email === this.state.user.email){
    //         this.props.updateProfileAct(nextProps.user.id, nextProps.user);
    //       }
    // }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.updateProfileAct(this.props.user.id, this.state);
        this.props.handler();

        //this added so that when user updates Profile, it will setstate
        //in profile page to trigger rerender of profile component
        // this.props.handler();
    }

    update(field){
        return e => this.setState({
            [field]:e.currentTarget.value
        });
    };

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

    
    // componentWillReceiveProps(nextProps){
    //     this.setState({user:nextProps.user});
    // }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="New username" value={this.state.handle} onChange= {this.update("handle")}></input>
                    <br/>
                    <input type="text" placeholder="New email" value={this.state.email} onChange={this.update("email")}></input>
                    <br/>
                    <input type="text" placeholder="Change zipcode" value={this.state.zipcode} onChange={this.update("zipcode")}></input>
                    <br/>
                    <input type="password" placeholder="Enter password to update" value={this.state.password} onChange={this.update("password")}></input>
                    <button>Update profile</button>
                </form>
                <div className="errors">
                  <ul>{this.renderErrors()}</ul>
                </div>
            </div>
            
        )
    }
}

export default Test;