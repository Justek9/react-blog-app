import PostForm from './PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { editPost, getPostById } from '../../redux/postsRedux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

const EditPostForm = () => {
	const { id } = useParams()
	const post = useSelector(state => getPostById(state, id))
	const navigate = useNavigate()
	const dispatch = useDispatch()

	

	const handleSubmit = post => {
		dispatch(editPost({ ...post, id }))
		navigate(`/post/${id}`)
	}

	if (!post) return <Navigate to='/' />
	else
		return (
			<PostForm
				action={handleSubmit}
				actionText='Edit post'
				title={post.title}
				author={post.author}
				publishedDate={post.publishedDate}
				category={post.selectedCategory}
				shortDescription={post.shortDescription}
				content={post.content}
			/>
		)
}
export default EditPostForm
