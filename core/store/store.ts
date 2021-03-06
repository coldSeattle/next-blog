import { createStore, applyMiddleware, combineReducers, AnyAction, Action, Middleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import posts from '../reducers/postsReducer';
import post from '../reducers/postEmbedCommentsReducer';

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
    posts,
    post,
});

export type RootState = ReturnType<typeof combinedReducer>;

const reducer = (state: RootState, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.posts.posts) nextState.posts.posts = state.posts.posts; // preserve count value on client side navigation
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
