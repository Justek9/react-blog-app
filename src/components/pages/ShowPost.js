import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../redux/postsRedux'
import NavLink from 'react-bootstrap/NavLink'

const ShowPost = () => {
	const { id } = useParams()
	const post = useSelector(state => getPostById(state, id))

	return (
		<section className='d-flex flex-row justify-content-around align-items-start'>
			<div className='d-flex flex-column align-items-left'>
				<h4>{post.title}</h4>

				<p className='mb-0'>
					<span className='fw-bold'>Author: </span>
					{post.author}
				</p>
				<p>
					<span className='fw-bold'>Published: </span>
					{post.publishedDate}
				</p>
				<p>{post.content}</p>
			</div>
			<div className='d-flex justify-content-center'>
				<Button variant='outline-info' as={NavLink} to={`/post/edit/${post.id}`}>
					Edit
				</Button>
				<Button variant='outline-danger' className='ms-2'>
					Delete
				</Button>
			</div>
		</section>
	)
}

export default ShowPost
