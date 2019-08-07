import React, { Component } from "react";
import store, { CLEAR_STATE, STATE_STEP_ONE } from "../../ducks/store";
import { Link } from "react-router-dom";
import randomColor from "randomcolor"

export default class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
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
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: 0,
      }),
    });
  };

  next = () => {
      let {name, address, city, state, zipcode} = this.state
      store.dispatch({
          type: STATE_STEP_ONE,
          payload: {name, address, city, state, zipcode}
      })
  }

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
    return (
      <div style={{ backgroundColor: this.state.color }}>
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
          <button onClick={this.clear}>Clear</button>
          <Link to="/wizard/step2">
              <button onClick={this.next}>Next</button>
          </Link>
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
