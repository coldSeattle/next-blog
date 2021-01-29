import { useSelector } from 'react-redux'
import { PostsState } from '../reducers/postsReducer'
import { RootState } from '../store/store'

export const usePosts = () => {
    const { posts } = useSelector<RootState, PostsState>(state => state.posts)
    return {
        posts
    }
}