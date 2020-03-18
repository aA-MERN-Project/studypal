import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: test
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        this.props.processForm(this.state)
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return(
            <div>
                <div>
                    <div className="name">Name</div>
                    <div className="email">Email</div>
                    <div>Current Location</div>
                </div>
                <br/>
                <div>
                    <div className="preferences">Saved Preferences</div>
                    <div>
                        <div className="top-row">
                            <div className="within">
                                <div className="within-select">Within: </div>
                                <select className="within-select">
                                    <option value="0.5 miles">0.5 miles</option>
                                    <option value="1 mile">1 mile</option>
                                    <option value="3 miles">3 miles</option>
                                    <option value="5 miles">5 miles</option>
                                    <option value="10 miles">10 miles</option>
                                </select>
                            </div>
                            <div className="open-for">
                                <div className="within-select">Open for the next: </div>
                                <select className="open-for-selected">
                                    <option value="1 hour">1 hour</option>
                                    <option value="2 hours">2 hours</option>
                                    <option value="3 hours">3 hours</option>
                                    <option value="5 hours">5 hours</option>
                                    <option value="8 hours">8 hours</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="bottom-row">
                            <div className="wifi">
                                <div className="within-select">Free WiFi: </div>
                                <select className="wifi-select">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="credit">
                                <div className="within-select">Takes Credit Card: </div>
                                <select className="credit-select">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="noise">
                                <div className="within-select">Noise Level: </div>
                                <select className="noise-select">
                                    <option value="quiet">Quiet</option>
                                    <option value="average">Average</option>
                                    <option value="loud">Loud</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile