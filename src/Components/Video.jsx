import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <ReactPlayer
      url="https://staging.coverr.co/s3/mp4/The-Launch.mp4"
      playing
      muted
      loop
      width
      height
    />
  );
}
