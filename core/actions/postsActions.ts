import axios from 'axios';
import { root } from '../../config/api';
import {
    AddNewPost,
    AddNewPostType,
    ADD_NEW_POST,
    FetchPostActionTypes,
    FetchPostsActionTypes,
    FetchPostsType,
    FETCH_POSTS,
    FETCH_POST_EMBED_COMMEMTS,
    PostEmbedCommentsType,
    PostItemType,
} from '../types/postsActionTypes';

export const fetchPostsSync = (payload: FetchPostsType): FetchPostsActionTypes => {
    return {
        type: FETCH_POSTS,
        payload,
    };
};

// fetch all posts
export const fetchPosts = () => async (dispatch) => {
    const res = await root.get('/posts');
    return dispatch(fetchPostsSync(res.data));
};

// fetch a post embed comments
export const fetchPostEmbedCommentsSync = (payload: PostEmbedCommentsType): FetchPostActionTypes => {
    return {
        type: FETCH_POST_EMBED_COMMEMTS,
        payload,
    };
};

export const fetchPostEmbedComments = (postId: any) => async (dispatch) => {
    const res = await root.get(`/posts/${postId}?_embed=comments`);
    return dispatch(fetchPostEmbedCommentsSync(res.data));
};

// add new post

export const addNewPostSync = (payload: PostItemType): AddNewPost => {
    return {
        type: ADD_NEW_POST,
        payload,
    };
};

const options = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const addNewPostAsync = ({ title, body }: AddNewPostType) => async (dispatch) => {
    const res = root.post(
        '/posts',
        {
            title: title,
            body: body,
        },
        options,
    );
    console.log('res', (await res).data);

    return dispatch(addNewPostSync((await res).data));
};
