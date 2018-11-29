import React from "react";
import { Grid, Form, Button, TextArea, Container } from "semantic-ui-react";
import GoogleMaps from "./GoogleMaps";

export default function Contact(props) {
  return (
    <Container>
      <div id="contact">
        <Grid columns={2} celled>
          <Grid.Column width={5} textAlign="left">
            <h1 className="rama-header">Contact</h1>
            <br />
            <p>email: contendogroup@gmail.com</p>
            <p>phone: (713)730-9428</p>
            <Form inverted widths="equal" onSubmit={e => props.handleSubmit(e)}>
              <Form.Field>
                <label>Name</label>
                <input
                  id="name"
                  onChange={e => props.handleChange(e)}
                  placeholder="Your name here..."
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  id="email"
                  onChange={e => props.handleChange(e)}
                  placeholder="Your email here..."
                />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <TextArea
                  id="message"
                  onChange={e => props.handleChange(e)}
                  autoHeight
                  placeholder="Your message here..."
                />
              </Form.Field>
              <Button inverted type="submit">
                Send Message
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column witdth={10} id="map">
            <GoogleMaps />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
