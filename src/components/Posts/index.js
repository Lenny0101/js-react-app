import React, { Component } from "react";
import PostCard from "../PostCard";
import image from "../../media/inst.jpg";
import "./index.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (!this.props.postReducer || !this.props.postReducer.list) {
      return null;
    } else {
      console.log(this.props);
    }

    return (
      <section className="posts">
        <div className="container">
          {this.props.postReducer.list.map(el => (
            <PostCard
              key={el._id}
              image={el.media.path}
              text={el.title}
              location="Riga,Latvia"
              username="Lenny"
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Posts;
