import React, { Component } from "react";
import Navbar from "./Components/layout/Navbar";
import UserItem from "./Components/users/Useritem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> {/*Static Default Nav*/}
        <UserItem />
      </div>
    );
  }
}

export default App;
