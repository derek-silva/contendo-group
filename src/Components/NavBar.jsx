import React, { Component } from "react";
import { Menu, Segment, Image } from "semantic-ui-react";
import logoWhite from "../Images/logoWhite.png";

class NavBar extends Component {
  state = { activeItem: "work" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
      <Segment inverted style={{ margin: "0px" }}>
        <Menu pointing secondary inverted>
          <Menu.Item position="left">
            <Image size="small" src={logoWhite} />
          </Menu.Item>
          {/* <Menu.Item
            className="rama-nav"
            position="right"
            name="work"
            active={activeItem === "work"}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item>
            <a style={{ color: "rgb(45, 255, 254)" }} href="#work">
              Work
            </a>
          </Menu.Item>
          <Menu.Item>
            <a style={{ color: "rgb(45, 255, 254)" }} href="#about">
              About
            </a>
          </Menu.Item>
          <Menu.Item>
            <a style={{ color: "rgb(45, 255, 254)" }} href="#contact">
              Contact
            </a>
          </Menu.Item>
          {/* <Menu.Item
            className="rama-nav"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            className="rama-nav"
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          /> */}
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
