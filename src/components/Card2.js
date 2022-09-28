import React, { Component } from "react";
import { FaFirefox, FaWindows } from "react-icons/fa";

class Card2 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <span className="icon">
          <FaFirefox />
        </span>
        <span>
          < FaWindows />
        </span>
      </div>
    );
  }
}

export default Card2;
