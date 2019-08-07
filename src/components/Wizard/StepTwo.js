import React, { Component } from "react";
import store, { CLEAR_STATE, INPUT_STATE } from "../../ducks/store";
import axios from "axios";
import { Link } from "react-router-dom";
import randomColor from "randomcolor";

export default class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
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
        image: "",
        rent: 0
      })
    });
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
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <form onSubmit={e => e.preventDefault()}>
          <input
            name="image"
            placeholder="Image URL"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={this.clear}>Clear</button>
          <Link to="/wizard/step1">
            <button>Previos</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next</button>
          </Link>
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
