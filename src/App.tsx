import React, { Component } from "react";
import Navbar from "./Components/layout/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import axios from "axios";
import "./App.css";
import { User } from "./types";

interface State {
  users: User[];
  loading: boolean;
}

class App extends Component<{}, State> {
  state = {
    users: [],
    loading: false,
  };
  //the top 30 users are fetched from the github api

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }npm

  //Search GitHub users

  // searchUsers = async (text) => {
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data.items, loading: false });

  //Search GitHub users 10 Searches per min limit if more Auth required.

  searchUsers = async (text: string) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      //   },
      // }
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar /> {/*Static Default Nav*/}
        <div className="container">
          <Search searchUsers={this.searchUsers} /> {/*Search Component*/}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
