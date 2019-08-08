import React, { Component } from "react";

export default class House extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.house.name}</h2>
          <h4>{this.props.house.address}</h4>
          <h4>{this.props.house.city}</h4>
          <h4>{this.props.house.state}</h4>
          <h4>{this.props.house.zip}</h4>
          <img src={this.props.house.image} alt="house"/>
          <h4>{this.props.house.mortgage}</h4>
          <h4>{this.props.house.rent}</h4>
        </div>
        <button onClick={() => this.props.deleteHouse(this.props.house.id)}>
          Delete
        </button>
      </div>
    );
  }
}
