// reducers/blogReducer.js
import { SET_BLOGS } from "../actions/BlogActions";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
