export const postsActionTypes = {
    FILL: 'FILL',
};

export type FetchPostsType = [];

export const FETCH_POSTS = 'FETCH_POSTS';
export type FetchPostsActionType = {
    type: typeof FETCH_POSTS;
    payload: FetchPostsType;
};

export type PostEmbedCommentsType = {
    id: number;
    title: string;
    body: string;
    comments: [
        {
            id: number;
            postId: number;
            body: string;
        }?,
    ];
};

export const FETCH_POST_EMBED_COMMEMTS = 'FETCH_POST_EMBED_COMMEMTS';
export type FetchPostEmbedComments = {
    type: typeof FETCH_POST_EMBED_COMMEMTS;
    payload: PostEmbedCommentsType;
};

export type FetchPostActionTypes = FetchPostEmbedComments;

export type AddNewPostType = {
    title: string;
    body: string;
};

// add new post
export const ADD_NEW_POST = 'ADD_NEW_POST';
export type AddNewPost = {
    type: typeof ADD_NEW_POST;
    payload: PostEmbedCommentsType;
};

export type FetchPostsActionTypes = FetchPostsActionType | AddNewPost;
