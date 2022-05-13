import React, { Component } from "react";

export class search extends Component {
  state = {
    Text: "",
  };
  //submit the form
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.Text);
    this.setState({ Text: "" });
  };
  //event para
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default search;
