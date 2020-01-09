import React, { Component } from "react";
import Hog from "./Hog";
import hogs from "../porkers_data";

export class HogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogTiles: []
    };
  }

  render() {
    return (
      <div className="ui three stackable cards">
        {hogs.map(hog => (
          <Hog
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            hog = {hog}
          />
        ))}
      </div>
    );
  }
}

export default HogContainer;
