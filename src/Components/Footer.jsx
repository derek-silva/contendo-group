import React from "react";
import { Segment, Grid, Button, Container, List } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted>
      <Container>
        <Grid columns={2} textAlign="center">
          <Grid.Column>
            <Button
              inverted
              circular
              icon="facebook"
              onClick={() =>
                window.open("https://www.facebook.com/contendogroupllc")
              }
            />
            <Button
              inverted
              circular
              icon="twitter"
              onClick={() => window.open("http://www.twitter.com")}
            />
            <Button
              inverted
              circular
              icon="linkedin"
              onClick={() => window.open("http://www.linkedin.com")}
            />
            <Button
              inverted
              circular
              icon="google plus"
              onClick={() => window.open("http://www.google.com")}
            />
          </Grid.Column>
          <Grid.Column>
            <List inverted horizontal bulleted link>
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
            <h6 style={{ color: "grey", margin: "0px" }}>
              © contendogroup.com, Inc. All rights reserved.
            </h6>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
