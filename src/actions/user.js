import axios from "axios";
import sha256 from "sha256";
import {
  API,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../constants";

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    payload: { isLogged: true }
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    payload: { isLogged: false }
  };
};

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    payload: { isRegistered: true }
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    payload: { isRegistered: false }
  };
};

export const login = (email, password) => {
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.LOGIN}`, {
        email,
        hashedPassword: sha256(password)
      })
      .then(res => {
        const { token } = res.data.payload;
        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginError());
      });
  };
};

export const register = (email, username, password) => {
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.REGISTER}`, {
        email,
        username,
        hashedPassword: sha256(password)
      })
      .then(() => {
        dispatch(registerSuccess());
      })
      .catch(() => {
        dispatch(registerError());
      });
  };
};

export const validateToken = () => {
  return dispatch => {
    const token = localStorage.getItem("jwtToken");
    token ? dispatch(loginSuccess()) : dispatch(loginError());
  };
};
