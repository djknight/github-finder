import React, { Component } from "react";

class UserItem extends Component {
  state = {
    login: "mojombo",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    html_url: "https://github.com/mojombo",
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            more
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
