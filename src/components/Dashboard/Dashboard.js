import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  render() {
    let houseMap = this.state.houses.map(house => (
      <div>
        <House key={house.id} house={house} />
      </div>
    ));

    return (
      <div>
        Dashboardry, I'm in the Dashy component
        <Link to="/wizard">Add New Property</Link>
        {houseMap}
        <House />
      </div>
    );
  }
}
