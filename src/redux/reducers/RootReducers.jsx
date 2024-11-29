import { combineReducers } from "redux";
import blogReducer from "./BlogReducers";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
