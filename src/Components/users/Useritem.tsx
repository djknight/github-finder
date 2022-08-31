import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}

const UserItem = ({ user: { login, avatar_url, html_url } }: Props) => {
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
};

export default UserItem;
