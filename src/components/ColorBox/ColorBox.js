import React, { Component } from "react";
import "./ColorBox.css";
import "../../helpers/helpers";
import { choice } from "../../helpers/helpers";

class ColorBox extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;

    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default ColorBox;
