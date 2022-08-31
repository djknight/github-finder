import React from "react";
import UserItem from "./Useritem";
import Spinner from "../layout/Spinner";
import { User } from "../../types";

interface Props {
  users: User[];
  loading: boolean;
}

const Users = ({ users, loading }: Props) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
