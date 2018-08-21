import React, { Component } from "react";
import "./index.css";

class UserCard extends Component {
  render() {
    return (
      <div class="userCard">
        <div class="userImage">
          <img src="https://instagram.frix6-1.fna.fbcdn.net/vp/3d5b6f1f588fd00641caa1fe459da3cd/5BF4052D/t51.2885-19/s150x150/37644790_2143853165883274_3937035239926267904_n.jpg" />
        </div>
        <div class="userName">
          <p>Lenny</p>
          <p>13 HOURS AGO</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
