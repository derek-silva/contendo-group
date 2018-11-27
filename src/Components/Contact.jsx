import React from "react";
import { Grid } from "semantic-ui-react";
import GoogleMaps from "./GoogleMaps";

export default function Contact() {
  return (
    <div id="contact" style={{ margin: "20px", paddingBottom: "20px" }}>
      <Grid columns={2}>
        <Grid.Column width={8} textAlign="left">
          <h1 className="rama-header">Contact</h1>
          <br />
          <p>email: contendogroup@gmail.com</p>
          <p>phone: (713)730-9428</p>
        </Grid.Column>
        <Grid.Column witdth={10}>
          <GoogleMaps />
        </Grid.Column>
      </Grid>
    </div>
  );
}
