import { postsActionTypes } from "../types/postsActionTypes";

const postsInitialState = {
  posts: [
    {
      id: "",
      title: "",
      body: "",
    },
  ],
};

export default function reducer(state = postsInitialState, action) {
  switch (action.type) {
    case postsActionTypes.FILL:
      return Object.assign({}, state, {
        posts: action.payload,
      });
    default:
      return state;
  }
}
