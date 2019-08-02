import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios"

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/house")
      .then(res => {
          console.log(res)
        this.setState({
          houses: res.data
        });
      })
      .catch(err => alert(err));
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
