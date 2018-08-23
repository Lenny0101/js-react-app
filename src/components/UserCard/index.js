import React from "react";
import "./index.css";

const UserCard = ({ image, userName, userTime }) => (
  <div className="userCard">
    <div className="userImage">
      <img src={image} alt="" />
    </div>
    <div className="userInfo">
      <div className="userName">
        <p>{userName}</p>
      </div>
      <div className="userTime">
        <p>{userTime}</p>
      </div>
    </div>
  </div>
);

export default UserCard;
