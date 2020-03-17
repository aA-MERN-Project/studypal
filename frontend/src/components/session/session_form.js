import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        this.props.errors
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
                                onChange={this.forceUpdate('email')}
                            />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label>Password
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.forceUpdate('password')}
                            />
                        </label>
                    </div>
                    <br/>
                    <button>{this.props.formType}</button>
                </form>
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
                                value={this.state.username}
                                onChange={this.update('username')}
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
                    <br/>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }

    render() {
        return this.props.formType === "Log in " ? this.login() : this.signup()
    }
}

export default SessionForm