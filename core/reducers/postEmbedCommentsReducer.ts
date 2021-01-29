import {
  FetchPostActionTypes,
  FETCH_POST_EMBED_COMMEMTS,
  PostEmbedCommentsType,
} from "../types/postsActionTypes";

export type PostState = {
  post: PostEmbedCommentsType;
};

const postsInitialState: PostState = {
  post: {
    id: 0,
    body: "",
    title: "",
    comments: [
      // {
      //   id: 0,
      //   postId: 0,
      //   body: "",
      // },
    ],
  },
};

export default function reducer(
  state = postsInitialState,
  action: FetchPostActionTypes
): PostState {
  switch (action.type) {
    case FETCH_POST_EMBED_COMMEMTS:
      return Object.assign({}, state, {
        post: action.payload,
      });
    default:
      return state;
  }
}
