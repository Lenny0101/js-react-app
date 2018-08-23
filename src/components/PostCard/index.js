import React from "react";

import "./index.css";

const PostCard = ({ username, location, text, image }) => (
  <div className="postCard">
    <div className="postHeader">
      <div className="profileImage" />
      <div className="profileInfo">
        <p> {username}</p>
        <p>{location}</p>
      </div>
    </div>
    <div className="postImage">
      <img src={image} alt="" />
    </div>
    <div className="postContent">
      <div className="postIcons">
        <i className="far fa-heart fa-2x" />
        <i className="icon far fa-comment fa-2x icon-flipped" />
        <i className="far fa-bookmark fa-2x allign-right" />
      </div>
      <p>{text}</p>
    </div>
  </div>
);

export default PostCard;
