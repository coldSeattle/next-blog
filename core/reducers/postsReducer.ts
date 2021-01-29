import { ADD_NEW_POST, FetchPostsActionTypes, FetchPostsType, FETCH_POSTS } from '../types/postsActionTypes';

export type PostsState = {
    posts: FetchPostsType;
};

const postsInitialState: PostsState = {
    posts: [],
};

export default function reducer(state = postsInitialState, action: FetchPostsActionTypes): PostsState {
    switch (action.type) {
        case FETCH_POSTS:
            return Object.assign({}, state, {
                posts: action.payload.reverse(),
            });
        case ADD_NEW_POST:
            return Object.assign({}, state, {
                posts: [action.payload].concat(state.posts),
            });
        default:
            return state;
    }
}
