import React from "react";
import video from "../Videos/CG_Banner_01.mp4";

export default function Video() {
  return (
    <div>
      <video
        autoPlay="autoplay"
        loop="loop"
        style={{ width: "100%", height: "90%" }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
