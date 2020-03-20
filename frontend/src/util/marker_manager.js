const google = window.google;

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(properties) {
    properties.forEach(property => {
      if (!this.markers[property.id]) {
        this.createMarkerFromProperty(property);
      }
    });
  }

  createMarkerFromProperty(property) {
    const position = new google.maps.LatLng(property.lat, property.lng);
    const pin = {
      url:
        "https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/cserkesz_ikon.png"
    };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      propertyId: property.id
    });

    marker.addListener("click", () => this.handleClick(property));
    this.markers[marker.propertyId] = marker;
    marker.setMap(this.map);
  }
}

export default MarkerManager;
