import { useSelector } from 'react-redux';
import { PostState } from '../reducers/postEmbedCommentsReducer';
import { RootState } from '../store/store';

export const usePost = (): PostState => {
    const { post } = useSelector<RootState, PostState>((state) => state.post);
    return {
        post,
    };
};
