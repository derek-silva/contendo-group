import React from "react";
import { Grid } from "semantic-ui-react";

export default function Contact() {
  return (
    <Grid container className="dark">
      <Grid.Column width={7} textAlign="left">
        <h1 className="rama-header">Contact</h1>
        <br />
        <p>email: contendogroup@gmail.com</p>
        <p>phone: (713)730-9428</p>
      </Grid.Column>
      <Grid.Column witdth={16} />
    </Grid>
  );
}
