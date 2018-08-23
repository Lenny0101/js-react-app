import React, { Component } from "react";
import image from "../../media/logo-written.png";
import "./index.css";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleLogin = e => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.login(email, password).then(() => {
      if (this.props.loginReducer.isLogged) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <section className="loginSection ">
        <div className="loginForm">
          <form className="form-signin text-center">
            <img className="mb-4" src={image} alt="" width="175" height="70" />
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
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={this.handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default LogIn;
