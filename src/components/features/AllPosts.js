import Post from './Post'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/postsRedux'
import Row from 'react-bootstrap/esm/Row'

const AllPosts = () => {
	const posts = useSelector(state => getAllPosts(state))

	return (
		<Row className='d-flex justify-content-between'>
			{posts.map(post => (
				<Post key={post.id} post={post}></Post>
			))}
		</Row>
	)
}
export default AllPosts
