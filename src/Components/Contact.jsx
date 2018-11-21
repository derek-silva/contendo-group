import React from "react";
import { Grid, Image } from "semantic-ui-react";
import staticMap from "../Images/staticMap.png";

export default function Contact() {
  return (
    <Grid container>
      <Grid.Column width={7} textAlign="left">
        <h1>Contact</h1>
        <br />
        <p>email: contendogroup@gmail.com</p>
        <p>phone: (713)730-9428</p>
      </Grid.Column>
      <Grid.Column witdth={16}>
        <Image src={staticMap} />
      </Grid.Column>
    </Grid>
  );
}
