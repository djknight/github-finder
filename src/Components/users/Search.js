import React, { Component } from "react";

export class search extends Component {
  render() {
    return (
      <div>
        <form className="form"></form>
        <input type="text" Name="search" placeholder="Search Users..."></input>
        <input
          type="submit"
          value="submit"
          className="btn btn-dark btn-block"
        ></input>
      </div>
    );
  }
}

export default search;
