import Button from 'react-bootstrap/Button'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getPostById } from '../../redux/postsRedux'
import DeleteModal from '../features/DeleteModal'
import { dateToStr } from '../../utils/dateToStr'

const ShowPost = () => {
	const { id } = useParams()
	const post = useSelector(state => getPostById(state, id))

	const [modalShow, setModalShow] = useState(false)

	if (!post) return <Navigate to='/' />
	else
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
						{dateToStr(post.publishedDate)}
					</p>
					<p>
						<span className='fw-bold'>Category: </span>
						{post.category}
					</p>
					<p dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
				<div className='d-flex justify-content-center'>
					<Button variant='outline-info' as={NavLink} to={`/post/edit/${post.id}`}>
						Edit
					</Button>
					<Button variant='outline-danger' className='ms-2' onClick={() => setModalShow(true)}>
						Delete
					</Button>
				</div>
				<DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
			</section>
		)
}

export default ShowPost
