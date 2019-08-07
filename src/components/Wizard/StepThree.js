import React, { Component } from "react";
import store, {
  CLEAR_STATE,
  STATE_STEP_THREE
} from "../../ducks/store";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import randomColor from "randomcolor";

export default class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      rent: 0,
      toDashboard: false,
      color: ""
    };
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
        rent: 0
      }),
      toDashboard: false
    });
  };

  addHouse = () => {
    let { rent } = this.state;
    store.dispatch({
      type: STATE_STEP_THREE,
      payload: { rent }
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
        <form onSubmit={e => e.preventDefault()}>
          <input
            name="rent"
            placeholder="Recommended Monthly Rent"
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
