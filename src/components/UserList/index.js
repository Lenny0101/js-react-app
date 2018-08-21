import React, { Component } from "react";
import UserCard from "../UserCard";
import "./index.css";

class UserList extends Component {
  render() {
    return (
      <div class="userList">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    );
  }
}

export default UserList;
