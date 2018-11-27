import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import KEY from "../config";

const style = {
  width: "100%",
  height: "100%"
};

class GoogleMaps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 29.7591,
          lng: -95.3636
        }}
        zoom={14}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Main Office"}
          name={"WeWork"}
          position={{ lat: 29.7591, lng: -95.3636 }}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Hello</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(GoogleMaps);
