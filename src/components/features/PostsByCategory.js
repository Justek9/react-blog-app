import { useParams } from 'react-router-dom'
import { getPostbyCategory } from '../../redux/postsRedux'
import { useSelector } from 'react-redux'
import Post from './Post'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'

const PostsByCategory = () => {
	const { category } = useParams()
	const postsByCategory = useSelector(state => getPostbyCategory(state, category))

	if (postsByCategory.length === 0) return <p>No posts in such category</p>

	return (
		<Row className='d-flex'>
			<Card.Title as='h2' className='mb-3'>
				Category: {category}
			</Card.Title>{' '}
			{postsByCategory.map(post => (
				<Post key={post.id} post={post} className='mt-2'></Post>
			))}
		</Row>
	)
}

export default PostsByCategory
