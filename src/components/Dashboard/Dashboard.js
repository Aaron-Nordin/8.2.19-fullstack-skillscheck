import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/house")
      .then(res => {
        this.setState({
          houses: res.data
        });
      })
      .catch(err => alert(err));
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).catch(() => alert("Can't Delete!"));
    this.getHouses();
  }

  render() {
    let houseMap = this.state.houses.map(house => (
      <div key={house.id}>
        <House house={house} deleteHouse={this.deleteHouse} />
        <hr />
      </div>
    ));

    return (
      <div>
        <Link to="/wizard">Add New Property</Link>
        {houseMap}
      </div>
    );
  }
}
