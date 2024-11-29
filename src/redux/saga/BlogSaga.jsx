import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_BLOGS, setBlogs } from "../actions/BlogActions";

function* fetchBlogsSaga(action) {
  try {
    const search = action.payload; // Get the search query from the action
    const sortBy = new URLSearchParams(search).get("q");

    let response;
    if (sortBy) {
      response = yield call(
        fetch,
        `https://dummyjson.com/posts/search?q=${sortBy}`
      );
    } else {
      response = yield call(fetch, "https://dummyjson.com/posts");
    }

    const data = yield response.json();
    yield put(setBlogs(data.posts)); // Dispatch the setBlogs action with fetched data
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}

export default function* blogSagas() {
  yield takeEvery(FETCH_BLOGS, fetchBlogsSaga);
}
