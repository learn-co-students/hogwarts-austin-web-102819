import React, { Component } from "react";
// import hogs from "../porkers_data";

export class Hog extends Component {
  const = {name}
  render() {
    return (
      <div className="ui card eight wide column pigTile">
        <p>{this.props.name}</p>
        <p>{this.props.specialty}</p>
        <p>{this.props.weight}</p> 
        <p>{this.props.greased}</p>
       
      </div>
    );
  }
}

export default Hog;
