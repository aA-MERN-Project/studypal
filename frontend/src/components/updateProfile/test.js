import React from 'react';
import '../../reset.css';
import '../profile/profile.css';

class Test extends React.Component {
    
    constructor(props) {
        super(props);
        //  ;
        this.state = {
            id: this.props.user.id,
            handle: this.props.user.handle,
            email: this.props.user.email,
            zipcode: this.props.user.zipcode,
            updateProfile: "false",
            errors:"false"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
        
        this.openUpdate = this.openUpdate.bind(this);
        this.closeUpdate= this.closeUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.user.id){
            this.props.updateProfileAct(this.props.user.id, this.state);
        }else if(this.props.user._id){
            this.props.updateProfileAct(this.props.user._id, this.state);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.user.id){
            this.props.updateProfileAct(this.props.user.id, this.state);
        }else{
            this.props.updateProfileAct(this.props.user._id, this.state);
        }
        
        this.props.handler();

        
        this.props.clearErrors();
        this.props.handler();
    }

    update(field){
        return e => this.setState({
            [field]:e.currentTarget.value
        });
    };

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

    openUpdate(){
        this.setState({updatedProfile:"true"});
        this.setState({handle:this.props.updatedUser.handle});
        this.setState({email:this.props.updatedUser.email});
        this.setState({zipcode:this.props.updatedUser.zipcode});
        this.props.clearErrors();
    }

    closeUpdate(){
      this.setState({updatedProfile:"false"});
      this.props.clearErrors();

    }
    

    render(){
        if (this.state.updatedProfile==="true"){
            return(
                <div>
                    <div style={{margin:"0px"}} className="update-profile-div">
                        <form className="update-profile-form"onSubmit={this.handleSubmit}>
                            <div className="vertical-line-profile"></div>
                            <label className="profile-labels">Username:</label>
                            <br/>
                            <input className="update-input" type="text" placeholder="New username" value={this.state.handle} onChange= {this.update("handle")}></input>
                            <br/>
                            <label className="profile-labels">Email:</label>
                            <br />
                            <input className="update-input" type="text" placeholder="New email" value={this.state.email} onChange={this.update("email")}></input>
                            <br/>
                            <label className="profile-labels">Zipcode:</label>
                            <br />
                            <input className="update-input" type="text" placeholder="Change zipcode" value={this.state.zipcode} onChange={this.update("zipcode")}></input>
                            <br/>
                            <button className="updateProfileButton">Update profile</button>
                            &ensp;
                            <button className="update-profile-close" onClick={() => this.closeUpdate()}>Close</button>
                            <ul className="update-errors" onClick={this.closeUpdate}>{this.renderErrors()}</ul>
                        </form>
                        
                    </div>  
                </div>   
            )
        }else{
            return(
                <img className="updateProfileImg" src="https://studypal-dev.s3-us-west-1.amazonaws.com/edit.png" onClick={this.openUpdate}/>
            )   
        }
    
    }
}

export default Test;