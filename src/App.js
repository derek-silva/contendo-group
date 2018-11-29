import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Video from "./Components/Video";
import "./App.css";
import { Grid } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      message: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    console.log(this.state);
  };

  render() {
    return (
      <div id="app-div">
        <Grid>
          <Grid.Row>
            <NavBar />
          </Grid.Row>

          <Grid.Row>
            <Video />
          </Grid.Row>

          <Grid.Row>
            <Work />
          </Grid.Row>

          <Grid.Row>
            <About />
          </Grid.Row>
          <Grid.Row>
            <Contact
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Grid.Row>
          <Grid.Row>
            <Footer />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
