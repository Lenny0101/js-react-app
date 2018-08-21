import React, { Component } from "react";
import PostCard from "../PostCard";
import "./index.css";

class Posts extends Component {
  render() {
    return (
      <section class="posts">
        <div class="container">
          <PostCard text="some text" username="Lenny" location="Riga,Latvia" />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    );
  }
}

export default Posts;
