import { stat } from "fs";
import {
  AddNewPostType,
  ADD_NEW_POST,
  FetchPostsActionTypes,
  FetchPostsType,
  FETCH_POSTS,
  postsActionTypes,
} from "../types/postsActionTypes";

export type PostsState = {
  posts: FetchPostsType;
};

const postsInitialState: PostsState = {
  posts: [
    // {
    //   id: 0,
    //   body: "",
    //   title: "",
    // },
  ],
};

export default function reducer(
  state = postsInitialState,
  action: FetchPostsActionTypes
): PostsState {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, {
        posts: action.payload,
      });
    case ADD_NEW_POST:
      return Object.assign({}, state, {
        // posts: [action.payload, ...state.posts],
        posts: [action.payload].concat(state.posts),
      });
    default:
      return state;
  }
}
