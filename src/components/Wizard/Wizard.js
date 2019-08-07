import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import store, { CLEAR_STATE, INPUT_STATE } from "../../ducks/store";
import axios from "axios";

var randomColor = require("randomcolor");

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      toDashboard: false
    };

    // this.cancel = this.cancel.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clear = () => {
    store.dispatch({
      type: CLEAR_STATE,
      payload: this.setState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: 0,
        image: "",
        rent: 0
      }),
      color: "",
      toDashboard: false
    });
  };

  addHouse = () => {
    let { name, address, city, state, zipcode, image, rent } = this.state;
    store.dispatch({
      type: INPUT_STATE,
      payload: { name, address, city, state, zipcode, image, rent }
    });
    let reduxState = store.getState();
    axios.post("/api/house", reduxState).catch(err => alert(err));
    this.setState({ toDashboard: true });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.address !== prevState.address ||
      this.state.city !== prevState.city ||
      this.state.state !== prevState.state ||
      this.state.zipcode !== prevState.zipcode ||
      this.state.image !== prevState.image ||
      this.state.rent !== prevState.rent
    ) {
      this.setState({ color: randomColor() });
    }
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ backgroundColor: this.state.color }}>
        Wizardry, I'm in the Wizzy component
        <form onSubmit={e => e.preventDefault()}>
          <input
            name="name"
            placeholder="Name"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="address"
            placeholder="Address"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="city"
            placeholder="City"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="state"
            placeholder="State"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="zipcode"
            placeholder="Zip Code"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="image"
            placeholder="Image URL"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="rent"
            placeholder="Recommended Monthly Rent"
            onChange={e => this.handleChange(e)}
          />
          <div className="but-add-cancel">
            <button onClick={this.clear}>Clear</button>
            <button onClick={this.addHouse}>Complete</button>
          </div>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}
