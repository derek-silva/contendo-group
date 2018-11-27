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
                <List.Item>
                  <a style={{ color: "rgb(45, 255, 254)" }} href="#work">
                    Work
                  </a>
                </List.Item>
                <List.Item>
                  <a style={{ color: "rgb(45, 255, 254)" }} href="#about">
                    About
                  </a>
                </List.Item>
                <List.Item>
                  <a style={{ color: "rgb(45, 255, 254)" }} href="#contact">
                    Contact
                  </a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
