import React from "react";
import { Grid } from "semantic-ui-react";

export default function Work() {
  return (
    <div id="work" style={{ margin: "20px" }}>
      <Grid columns={2}>
        <Grid.Column width={8} textAlign="left">
          <h1 className="rama-header">WORK</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            quisquam voluptatum, excepturi adipisci accusamus blanditiis, ab,
            delectus nulla eius asperiores totam pariatur dolor? Iusto beatae
            autem fugiat quisquam fuga rem.
          </p>
        </Grid.Column>
        <Grid.Column witdth={10}>
          <div id="map" />
        </Grid.Column>
      </Grid>
    </div>
  );
}
