import React from "react";
import { Grid, Image } from "semantic-ui-react";

export default function Work() {
  return (
    <div id="work">
      <Grid columns={2} container className="dark">
        <Grid.Column width={7} textAlign="left">
          <h1 className="rama-header">WORK</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            quisquam voluptatum, excepturi adipisci accusamus blanditiis, ab,
            delectus nulla eius asperiores totam pariatur dolor? Iusto beatae
            autem fugiat quisquam fuga rem.
          </p>
        </Grid.Column>
        <Grid.Column witdth={16}>
          <Image />
        </Grid.Column>
      </Grid>
    </div>
  );
}
