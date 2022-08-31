import React, { Component } from "react";

interface Props {
  searchUsers: (text: string) => any;
}

interface State {
  text: string;
}

export class search extends Component<Props, State> {
  state = {
    text: "",
  };
  //submit the form
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  //event para
  onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ text: e.target.value });

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
