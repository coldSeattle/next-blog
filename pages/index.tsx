import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchPosts } from '../core/actions/postsActions'
import { wrapper } from '../core/store/store'
import Link from 'next/link'
import styled from 'styled-components'
const Page = ({ posts }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const data = dispatch(fetchPosts())
      console.log('data', data);
    }
    fetchData()
  }, [])

  return (
    <PostsContainer>

      <Header>
        <Title>Latest Posts</Title>
        <Link href={'/posts/new'}>
          <CreateNewPostNav>Create new Post</CreateNewPostNav>
        </Link>
      </Header>
      <div>{posts && posts.posts.map(item =>
        <PostItem key={item.id}>
          <Link href={`/posts/${item.id}`}><ContentTitle>{item.title}</ContentTitle></Link></PostItem>
      )}
      </div>
    </PostsContainer>)
}

export default connect((state) => state)(Page)

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(fetchPosts())
  }
)

export const PostsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #282c35;
  padding: 3rem;
`

export const Title = styled.h1`
  color: #ffffff;
  text-decoration: none;
  margin: 0;
`

export const ContentTitle = styled.a`  
  color: #ffa7c4;
  text-decoration: none;
  font-weight: 900;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
  margin-bottom:1.75rem;
`

export const Body = styled.p`
  color: #ffffffe0;
  text-decoration: none;
  font-family: cursive;
  margin-bottom:1.75rem;
`

export const PostItem = styled.li`
  margin: 3rem 3rem 3rem 0;
  list-style: none;
`

export const Navigation = styled.a`
&:before {
  content: "";
  transform: rotate(135deg);
  width:5px;
  height: 5px;
  border: solid #ffa7c4;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
  vertical-align:meddle;
  color: #ffa7c4;
  margin-top: 3rem;
`

export const Header = styled.header`
display: flex;
justify-content: space-between;
`

export const CreateNewPostNav = styled.a`
&:hover {
  text-decoration: underline;
}
  color: #ffa7c4;
  text-decoration: none;
  font-weight: 900;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
  margin-bottom:1.75rem;
  font-size: inherit;
  margin: 0;
`