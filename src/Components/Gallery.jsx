import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import palm from "../Images/palms.jpg";
import trippyPalms from "../Images/trippyPalms.jpg";

class Gallery extends Component {
  render() {
    const images = [
      {
        original: palm
      },
      {
        original: trippyPalms
      }
    ];

    return (
      <ImageGallery
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        items={images}
      />
    );
  }
}

export default Gallery;
