import { SUBMIT_SUCCESS, SUBMIT_ERROR, LOAD_POSTS } from "../constants";

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_SUCCESS:
      console.log(action);
      return {
        ...state,
        ...action.payload
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case LOAD_POSTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
