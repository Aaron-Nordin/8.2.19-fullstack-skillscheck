import React, { Component } from "react";
import store, { CLEAR_STATE, STATE_STEP_THREE } from "../../ducks/store";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import randomColor from "randomcolor";

export default class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0,
      toDashboard: false,
      color: ""
    };
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
        mortgage: 0,
        rent: 0
      }),
      toDashboard: false
    });
  };

  addHouse = () => {
    let { mortgage, rent } = this.state;
    store.dispatch({
      type: STATE_STEP_THREE,
      payload: { mortgage, rent }
    });
    let reduxState = store.getState();
    axios
      .post("/api/house", reduxState)
      .catch(err => alert(err))
      .then(this.clear());
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
        <form onSubmit={e => e.preventDefault()}>
          <h4>Recommended Rent: ${this.state.mortgage * 1.2}</h4>
          <input
            name="mortgage"
            placeholder="Monthly Mortgage Amount"
            onChange={e => this.handleChange(e)}
          />
          <input
            name="rent"
            placeholder="Desired Monthly Rent"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={this.clear}>Clear</button>
          <Link to="/wizard/step2">
            <button>Previous</button>
          </Link>
          <button onClick={this.addHouse}>Complete</button>
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
