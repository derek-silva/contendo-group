import React from "react";
import { Grid } from "semantic-ui-react";

export default function About() {
  return (
    <Grid container className="dark">
      <Grid.Column width={7}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          quisquam voluptatum, excepturi adipisci accusamus blanditiis, ab,
          delectus nulla eius asperiores totam pariatur dolor? Iusto beatae
          autem fugiat quisquam fuga rem.
        </p>
      </Grid.Column>
      <Grid.Column witdth={7}>
        <h1 className="rama-header">About</h1>
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
