import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/postsRedux'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddPostForm() {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [publishedDate, setPublishedDate] = useState('')
	const [shortDescription, setShortDescpription] = useState('')
	const [content, setContent] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addPost({ newPost: { title, author, shortDescription, content, publishedDate } }))
		setTitle('')
		setAuthor('')
		setPublishedDate('')
		setShortDescpription('')
		setContent('')
		navigate('/')
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col xs='12' lg='6'>
					<Form.Group className='mb-3'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter title'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Author</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter author'
							value={author}
							onChange={e => setAuthor(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Published</Form.Label>
						<Form.Control type='date' value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
					</Form.Group>
				</Col>
				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>Short Description</Form.Label>
						<Form.Control
							as='textarea'
							rows={5}
							placeholder='Leave a comment here'
							value={shortDescription}
							onChange={e => setShortDescpription(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Main Content</Form.Label>
						<Form.Control
							as='textarea'
							rows={5}
							placeholder='Leave a comment here'
							value={content}
							onChange={e => setContent(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Button variant='primary' type='submit'>
				Add Post
			</Button>
		</Form>
	)
}

export default AddPostForm
