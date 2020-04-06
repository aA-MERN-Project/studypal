import React, { Component } from "react";
import styles from './google_maps_style'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

const google = window.google;


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: null,
        }
    }

    componentDidMount() {
        const directionsService = new google.maps.DirectionsService();
        
        

        const origin = { lat: this.props.my_lat, lng: this.props.my_lng };
        const destination = { lat: this.props.cafe_lat, lng: this.props.cafe_lng };

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.WALKING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: this.props.my_lat, lng: this.props.my_lng }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;
