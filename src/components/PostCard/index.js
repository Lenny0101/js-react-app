import React, { Component } from "react";
import image from "../../media/inst.jpg";

class PostCard extends Component {
  render() {
    return (
      <div class="postCard">
        <div class="postHeader">
          <div class="profileImage" />
          <div class="profileInfo">
            <p> {this.props.username}</p>
            <p>{this.props.location}</p>
          </div>
        </div>
        <div class="postImage">
          <img src={image} />
        </div>
        <div class="postContent">
          <div class="postIcons">
            <i class="far fa-heart fa-2x" />
            <i class="icon far fa-comment fa-2x icon-flipped" />
            <i class="far fa-bookmark fa-2x allign-right" />
          </div>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default PostCard;
