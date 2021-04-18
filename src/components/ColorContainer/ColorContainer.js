import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./ColorContainer.css";

class ColorContainer extends Component {
  static defaultProps = {
    numBoxes: 21,
    allColors: [
      "#67595E",
      "#A49393",
      "#EED6D3",
      "#E8B4B8",
      "#AA1945",
      "#F9CCD3",
      "#F1CED4",
      "#391306",
      "#E43D40",
      "#F37970",
      "#F85C70",
      "#FABEC0",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox colors={this.props.allColors} />
    ));
    return <div className="ColorContainer"> {boxes} </div>;
  }
}
export default ColorContainer;
