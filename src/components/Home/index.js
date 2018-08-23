import React, { Component } from "react";
import Header from "../Header";
import Posts from "../../containers/Posts";
import UserList from "../UserList";
import PostModal from "../../containers/PostModal";
import Lightbox from "../Lightbox";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };

    props.validateToken();
  }

  componentDidUpdate() {
    const { loginReducer } = this.props;

    if (!loginReducer.isLogged) {
      this.props.history.push("/login");
    }
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClickOutside = event => {
    if (event.target.id === "lightbox") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state; // destructuring statement
    return (
      <section className="Home">
        <Header handleOpenModal={this.handleOpenModal} />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8">
              <Posts />
            </div>
            <div className="col-md-4">
              <UserList />
            </div>
          </div>
        </div>
        {/* {isModalOpen ? <PostModal handleCloseModal={this.handleCloseModal}/> : null}} */}
        {/* isModalOpen && <PostModal/> <-- valid way to render elements works as if statement */}
        {isModalOpen ? (
          <Lightbox handleClickOutside={this.handleClickOutside}>
            <PostModal handleCloseModal={this.handleCloseModal} />
          </Lightbox>
        ) : null}
      </section>
    );
  }
}

export default Home;
