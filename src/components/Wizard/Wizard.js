import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cancel() {
    this.setState({
      productImage: "",
      productName: "",
      productPrice: ""
    });
  }

  render() {
    return (
      <div>
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
          <div className="but-add-cancel">
            <button onClick={this.cancel}>Clear</button>
            {/* <button onClick={this.addNewProduct}>Add</button> */}
          </div>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}
