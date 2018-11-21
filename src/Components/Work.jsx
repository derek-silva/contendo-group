import React from "react";
import { Grid } from "semantic-ui-react";

export default function Work() {
  return (
    <Grid container>
      <Grid.Column width={7} textAlign="left">
        <h1>WORK</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          quisquam voluptatum, excepturi adipisci accusamus blanditiis, ab,
          delectus nulla eius asperiores totam pariatur dolor? Iusto beatae
          autem fugiat quisquam fuga rem.
        </p>
      </Grid.Column>
      <Grid.Column witdth={16}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis
          neque. Mollitia dolore quibusdam nihil beatae, ut nisi voluptates
          nesciunt totam nam voluptate cupiditate minima autem vero quas at
          minus?
        </p>
      </Grid.Column>
    </Grid>
  );
}
