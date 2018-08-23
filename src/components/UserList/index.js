import React, { Component } from "react";
import UserCard from "../UserCard";
import "./index.css";
const image =
  "https://instagram.frix6-1.fna.fbcdn.net/vp/3d5b6f1f588fd00641caa1fe459da3cd/5BF4052D/t51.2885-19/s150x150/37644790_2143853165883274_3937035239926267904_n.jpg";
class UserList extends Component {
  render() {
    return (
      <div className="userList">
        <UserCard image={image} userName="Lenny" userTime="13 HOURS AGO" />
        <UserCard image={image} userName="Lenny" userTime="13 HOURS AGO" />
        <UserCard image={image} userName="Lenny" userTime="13 HOURS AGO" />
        <UserCard image={image} userName="Lenny" userTime="13 HOURS AGO" />
      </div>
    );
  }
}

export default UserList;
