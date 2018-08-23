import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <section className="headerMenu">
        <div className="menuContainer container">
          <div className="logoPart">
            <i className="fas fa-camera-retro fa-2x" />
            <h2>Instagram</h2>
          </div>
          <div className="inputField">
            <input type="text" placeholder="Search.." />
          </div>
          <div className="menuButtons">
            <div className="createButton">
              <button className="btnIcon" onClick={this.props.handleOpenModal}>
                <i className="far fa-plus-square" />
              </button>
              <button className="btnIcon" onClick={this.props.handleOpenModal}>
                <i className="far fa-compass" />
              </button>
              <button className="btnIcon" onClick={this.props.handleOpenModal}>
                <i className="far fa-heart" />
              </button>
              <button className="btnIcon" onClick={this.props.handleOpenModal}>
                <i className="far fa-user" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
