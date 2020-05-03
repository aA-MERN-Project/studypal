import React from "react";
import onClickOutside from "react-onclickoutside";
import {connect} from "react-redux";
import {openModal, closeModal} from "../../actions/modal_actions"

const mSTP = (state) => ({

 
});

const mDTP = (dispatch) => {
  return {
    openModal: (modal,data) => dispatch(openModal(modal,data)),
    closeModal: () => dispatch(closeModal()),
  };
};




const google = window.google;


class DropdownLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      disabled: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleClickLocation = this.handleClickLocation.bind(this);
    this.handleClickZipcode = this.handleClickZipcode.bind(this);
    this.codeLatLng = this.codeLatLng.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
  }

  getPosition(position) {
    let my_lat = position.coords.latitude;
    let my_lng = position.coords.longitude;


    debugger;
    this.codeLatLng(my_lat, my_lng)

  


  }

  findCoordinates() {
  
    navigator.geolocation.getCurrentPosition(this.getPosition, (error) => {
        debugger
        this.props.openModal("turnOnLocationModal", null);
    });
      debugger;
  }

  codeLatLng(lat, lng) {


    let latlng = new google.maps.LatLng(lat, lng);

    this.geocoder.geocode(
      {
        latLng: latlng,
      },
      (results, status) => {
                             let zipCode = results[0].address_components.find(
                               function (component) {
                                 return component.types[0] == "postal_code";
                               }
                             );
                             console.log(zipCode.long_name);
                             // setstate in parent
                             this.props.getPosition(
                               lat,
                               lng,
                               zipCode.long_name
                             ); // setstate in parent
                     
                           }
    );
  }

  showMenu(event) {
    event.preventDefault();

    if (!this.state.showMenu) this.setState({ showMenu: true });
    if (this.state.showMenu) this.closeMenu();
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  handleClickOutside() {
    this.closeMenu();
  }

  handleClickLocation() {
    
    this.findCoordinates();
    this.closeMenu();
  }

  handleClickZipcode(zipcode) {
    this.props.updateState("location_zip_code", zipcode)();
    this.closeMenu();
  }

  render() {
    let dropdown = (
      <div className="dropdown">
        <div
          className="curr-location"
          onClick={() => this.handleClickLocation()}
        >
          <i class="fas fa-location-arrow"></i> Current location
        </div>

        <div
          className="curr-location"
          onClick={() => this.handleClickZipcode(94111)}
        >
          <i class="fas fa-running"></i> 94111
        </div>

        <div
          className="curr-location"
          onClick={() => this.handleClickZipcode(94121)}
        >
          <i class="fas fa-running"></i> 94121
        </div>
        <div
          className="curr-location"
          onClick={() => this.handleClickZipcode(94133)}
        >
          <i class="fas fa-running"></i> 94133
        </div>
      </div>
    );

    return (
      <div className="roll-cafe">
        <b> Near</b>
        <input
          id="zip"
          type="text"
          value={this.props.location_zip_code}
          placeholder="Enter a ZIP code (94111)"
          onChange={this.props.update("location_zip_code")}
          onClick={this.showMenu}
        />
        <input
          id="cafe-submit"
          onClick={this.props.handleSubmit}
          type="submit"
          value="Find a Cafe"
        />
        {this.state.showMenu ? dropdown : null}
      </div>
    );
  }
}


export default connect(mSTP, mDTP)(onClickOutside(DropdownLocation));