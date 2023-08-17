import { useParams } from 'react-router-dom'
import { getPostbyCategory } from '../../redux/postsRedux'
import { useSelector } from 'react-redux'
import Post from './Post'

const PostsByCategory = () => {
	const { category } = useParams()
	const postsByCategory = useSelector(state => getPostbyCategory(state, category))
	console.log(postsByCategory)

	if (postsByCategory.length === 0) return <p>No posts in such category</p>

	return (
		<div>
			{postsByCategory.map(post => (
				<Post key={post.id} post={post}></Post>
			))}
		</div>
	)
}

export default PostsByCategory
