import React from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Links" />
              <List link inverted>
                <List.Item as="a">Work</List.Item>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Contact</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
