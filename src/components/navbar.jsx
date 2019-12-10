import React, { Component } from "react";
import Stars from "./stars";
import "./navbar.css";
class Navbar extends Component {
  state = {
    rating: 0,
    name: ""
  };

  searchstarHandler = index => {
    return this.state.rating !== index + 1
      ? (this.setState({ rating: index + 1 }), this.props.srating(index + 1))
      : (this.setState({ rating: 0 }), this.props.srating(0));
  };
  searchnameHandler = event => {
    event.target.value === " " &&
      (event.target.value = event.target.value.trim());
    this.props.sname(event.target.value);
    this.setState({ name: event.target.value.trim() });
  };

  render() {
    return (
      <nav className="navbar navbar-light d-flex align-items-center">
        <div className="d-flex align-items-center">
          <input
            className=" p-2 pl-4 pr-4 border border-success rounded search-bar"
            type="text"
            placeholder="Enter movie name"
            onChange={this.searchnameHandler}
          />
          <button
            className="btn btn-outline-success pl-3 pr-3 p-2 m-2 mr-5"
            onClick={() => this.props.sname(this.state.name)}
          >
            Search
          </button>
          <div className="text-success" style={{ cursor: "pointer" }}>
            <Stars
              rating={this.state.rating}
              rate={index => this.searchstarHandler(index)}
              searchstar={true}
            />
          </div>
        </div>
        <button
          className="btn btn-outline-success font-weight-bold"
          onClick={() => this.props.closed(false)}
        >
          +
        </button>
      </nav>
    );
  }
}

export default Navbar;

//
