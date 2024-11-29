// actions/BlogActions.js
export const FETCH_BLOGS = "FETCH_BLOGS";
export const SET_BLOGS = "SET_BLOGS";

export const fetchBlogs = (searchQuery) => ({
  type: FETCH_BLOGS,
  payload: searchQuery,
});

export const setBlogs = (blogs) => ({
  type: SET_BLOGS,
  payload: blogs,
});
