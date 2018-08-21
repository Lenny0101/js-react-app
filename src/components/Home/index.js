import React, { Component } from "react";
import Header from "../Header";
import Posts from "../Posts";
import UserList from "../UserList";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <section class="Home">
        <div class="container">
          <div class="row">
            <Header />
          </div>
          <div class="row mt-5">
            <div class="col-md-8">
              <Posts />
            </div>
            <div class="col-md-4">
              <UserList />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
