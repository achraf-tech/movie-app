import React, { Component } from "react";

class AddMovie extends Component {
  state = { name: "", img: "", rating: "" };
  nameHandler = event => {
    this.setState({ name: event.target.value });
  };
  imgHandler = event => {
    this.setState({ img: event.target.value });
  };
  ratingHandler = event => {
    event.target.value = event.target.value.replace(/[^1-5]/g, "");
    this.setState({ rating: event.target.value });
  };

  addHandler = (name, img, rating) => {
    this.props.closed(true);
    console.log(this.state);
    this.props.addmovie(name, img, rating);
    this.setState({ name: "", img: "", rating: "" });
  };

  render() {
    return (
      <div
        className="form-movie rounded w-50 bg-white shadow-lg pb-3"
        style={{ display: this.props.formclosed ? "none" : null }}
      >
        <button
          className="btn btn-outline-success border-0 remove-form"
          onClick={() => this.props.closed(true)}
        >
          X
        </button>
        <div className="btn-2">
          <div className="form-group w-75 m-auto mt-2">
            <label className="mt-2">Movie Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.nameHandler}
            />
          </div>
          <div className="form-group w-75 m-auto mt-2">
            <label className="mt-2">Movie image</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter img"
              value={this.state.img}
              onChange={this.imgHandler}
            />
          </div>
          <div className="form-group w-75 m-auto mt-2">
            <label className="mt-2">Movie rate</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter rating"
              maxLength="1"
              value={this.state.rating}
              onChange={this.ratingHandler}
            />
          </div>
          <button
            className="btn btn-outline-success mt-2"
            onClick={() =>
              this.addHandler(
                this.state.name,
                this.state.img,
                this.state.rating
              )
            }
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default AddMovie;
