import React from "react";
import { Segment, Container, Grid, List } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em", margin: "0px" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link inverted>
                <List.Item as="a" href="#work">
                  Work
                </List.Item>
                <List.Item as="a" href="#about">
                  About
                </List.Item>
                <List.Item as="a" href="#contact">
                  Contact
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
