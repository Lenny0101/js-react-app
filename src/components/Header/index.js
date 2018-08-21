import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <section class="headerMenu">
        <div class="menuContainer container">
          <div class="logoPart">
            <i class="fas fa-camera-retro fa-2x" />
            <h2>Instagram</h2>
          </div>
          <div class="inputField">
            <input type="text" placeholder="Search.." />
          </div>
          <div class="menuButtons">
            <div class="createButton">
              <button>Create Post</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
