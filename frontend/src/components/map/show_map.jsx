import React from "react";
import MarkerManager from "../../util/marker_manager";
import '../../stylesheets/map.scss'
const google = window.google;


class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.lat !== prevProps.lat) {
      this.setState()
    }

  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng }, 
      zoom: 13
    };

    // this.MarkerManager = new MarkerManager(this.map);
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    let icon = {
      url: "https://studypal-dev.s3-us-west-1.amazonaws.com/Coffee_3.png", // url
      scaledSize: new google.maps.Size(70,70), // scaled size
    };


    const marker = new google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      icon: icon,
      map: this.map
    });

    // const marker_person = new google.maps.Marker({
    //   position: { lat: this.props.my_lat, lng: this.props.my_lng },
    //   map: this.map
    // });

  }

  render() {
    return (
      <div id="map-container" ref={map => (this.mapNode = map)}>

      // this ref gives us access to the map dom node
      </div>
    );
  }
}

export default ShowMap;