import axios from "axios";
import { postsActionTypes } from "../types/postsActionTypes";

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");
  return dispatch({ type: postsActionTypes.FILL, payload: res.data });
};
