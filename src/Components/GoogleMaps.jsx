import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import KEY from "../config";

const style = {
  width: "100%",
  height: "100%"
};

const mapStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        gamma: 0.5
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      },
      {
        hue: "#ff0000"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dddddd"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#dddddd"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#999999"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#999999"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#333333"
      }
    ]
  }
];

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        styles={mapStyle}
        initialCenter={{
          lat: 29.7591,
          lng: -95.3636
        }}
        zoom={14}
        onClick={this.onMapClick}
        disableDefaultUI
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Main Office"}
          name={"WeWork"}
          position={{ lat: 29.7591, lng: -95.3636 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div id="maps-info-window">
            <h4>Contendo Group LLC</h4>
            <h5>Telephone: (713)730-9428</h5>
            <h5>Email: contendogroup@gmail.com</h5>
            <h5>Address: 708 Main St. Houston, TX 77002</h5>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY
})(GoogleMaps);
