import axios from 'axios';
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
} from '../types/postsActionTypes';

export const fetchPostsSync = (payload: FetchPostsType): FetchPostsActionTypes => {
    return {
        type: FETCH_POSTS,
        payload,
    };
};

// fetch all posts
export const fetchPosts = () => async (dispatch) => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');
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
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`);
    return dispatch(fetchPostEmbedCommentsSync(res.data));
};

// add new post

export const addNewPostSync = (payload: PostEmbedCommentsType): AddNewPost => {
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
    const res = axios.post(
        'https://simple-blog-api.crew.red/posts',
        {
            title: title,
            body: body,
        },
        options,
    );
    console.log('res', (await res).data);

    return dispatch(addNewPostSync((await res).data));
};
