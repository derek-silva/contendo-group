import React from "react";
import { Grid, Container } from "semantic-ui-react";

export default function About() {
  return (
    <Container>
      <div id="about">
        <Grid columns={2} celled>
          <Grid.Column width={10}>
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
          <Grid.Column width={5}>
            <h1 className="rama-header">About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              debitis neque. Mollitia dolore quibusdam nihil beatae, ut nisi
              voluptates nesciunt totam nam voluptate cupiditate minima autem
              vero quas at minus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi, debitis neque. Mollitia dolore quibusdam
              nihil beatae, ut nisi voluptates nesciunt totam nam voluptate
              cupiditate minima autem vero quas at minus?
            </p>
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
