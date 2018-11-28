import React from "react";
import { Grid } from "semantic-ui-react";
import Gallery from "./Gallery";

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
            autem fugiat quisquam fuga rem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi, debitis neque. Mollitia dolore
            quibusdam nihil beatae, ut nisi voluptates nesciunt totam nam
            voluptate cupiditate minima autem vero quas at minus?
          </p>
        </Grid.Column>
        <Grid.Column witdth={10}>
          <Gallery />
        </Grid.Column>
      </Grid>
    </div>
  );
}
