import React from "react";
import video from "../Videos/CG_Banner_01.mp4";
import { Container } from "semantic-ui-react";

export default function Video() {
  return (
    <Container>
      <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
}
