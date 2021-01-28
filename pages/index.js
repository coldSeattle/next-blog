import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../core/actions/postsActions'
import { wrapper } from '../core/store/store'

const Page = ({ posts }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const data = dispatch(fetchPosts())
      console.log('data', data);
    }
    fetchData()
  }, [])

  return (<div>
    <h1>Latest Posts</h1>
    <div>posts:{posts && posts.posts.map(item =>
      <li key={item.id}>{item.title}</li>
    )}
    </div>
  </div>)
}

export default connect((state) => state)(Page)

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(fetchPosts())
  }
)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     "fetchPosts": bindActionCreators(fetchPosts, dispatch)
//   }
// }

// export default connect(null, mapDispatchToProps)(Page)
