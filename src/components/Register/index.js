import React, { Component } from "react";
import image from "../../media/logo-written.png";
import "./index.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleRegister = e => {
    e.preventDefault();
    const { email, username, password } = this.state;
    this.props.register(email, username, password).then(() => {
      console.log(this.props);
      if (this.props.registerReducer.isRegistered) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <section className="loginSection">
        <div className="loginForm">
          <form className="form-signin text-center">
            <img className="" src={image} alt="" width="175" height="70" />
            <h2 className="h2Header">
              Sign up to see photos and videos from your friends.{" "}
            </h2>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="inputEmail"
              className="form-control mb-2"
              placeholder="Email address"
              onChange={this.onChange}
            />
            <label htmlFor="inputUsername" className="sr-only">
              Username
            </label>
            <input
              type="username"
              name="username"
              id="inputUsername"
              className="form-control mb-2"
              placeholder="Username"
              onChange={this.onChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="inputPassword"
              className="form-control mb-3"
              placeholder="Password"
              onChange={this.onChange}
            />
            <button
              className="registerButton btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={this.handleRegister}
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
