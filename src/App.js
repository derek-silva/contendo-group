import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";
import About from "./Components/About";
import Video from "./Components/Video";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Video />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
