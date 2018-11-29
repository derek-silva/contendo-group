import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Gallery from "./Gallery";

export default function Work() {
  return (
    <Container>
      <div id="work">
        <Grid columns={2} celled>
          <Grid.Column width={5} textAlign="left" className="border-right">
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
          <Grid.Column witdth={10} id="work-gallery">
            <Gallery />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
