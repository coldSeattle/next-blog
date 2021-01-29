import { useEffect } from "react"
import { useRouter } from 'next/router'
import { wrapper } from "../../core/store/store";
import { fetchPostEmbedComments } from "../../core/actions/postsActions";
import { connect, useDispatch } from "react-redux";
import { usePost } from "../../core/selectors/usePost";
import { Body, PostsContainer, ContentTitle, Title, Navigation } from "..";
import Link from "next/link";

const Post = () => {
    const { post } = usePost()
    const router = useRouter()
    const { postId } = router.query

    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            dispatch(fetchPostEmbedComments(postId))
        }
        fetchData()
    }, [])

    return (
        <PostsContainer>

            <Title>Post</Title>
            <ContentTitle>{post.title}</ContentTitle>
            <Body>{post.body}</Body>

            <Title>Comments</Title>
            <div>{post ? post.comments.map(item => (
                <Body key={item.id}>{item.body}</Body>
            ))
                :
                <Body>no comments yet</Body>
            }
            </div>

            <Link href={'/'}>
                <Navigation className="arrow left">back</Navigation>

            </Link>

        </PostsContainer>
    )
}


export default connect((state) => state)(Post)



export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, query }) => {
        const { postId } = query
        store.dispatch(fetchPostEmbedComments(postId))
    }
)