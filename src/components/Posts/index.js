import React, { Component } from "react";
import PostCard from "../PostCard";
import image from "../../media/inst.jpg";
import "./index.css";

class Posts extends Component {
  render() {
    return (
      <section className="posts">
        <div className="container">
          <PostCard
            text="some text"
            username="Lenny"
            location="Riga,Latvia"
            image={image}
          />
          <PostCard
            text="some text"
            username="Lenny"
            location="Riga,Latvia"
            image={image}
          />
          <PostCard
            text="some text"
            username="Lenny"
            location="Riga,Latvia"
            image={image}
          />
          <PostCard
            text="some text"
            username="Lenny"
            location="Riga,Latvia"
            image={image}
          />
        </div>
      </section>
    );
  }
}

export default Posts;
