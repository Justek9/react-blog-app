import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || '')
	const [author, setAuthor] = useState(props.author || '')
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '')
	const [shortDescription, setShortDescription] = useState(props.shortDescription || '')
	const [content, setContent] = useState(props.content || '')

	const handleSubmit = e => {
		e.preventDefault()
		action({ title, author, publishedDate, shortDescription, content })
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
							onChange={e => setShortDescription(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Main Content</Form.Label>
						<Form.Control
							as='textarea'
							rows={10}
							placeholder='Leave a comment here'
							value={content}
							onChange={e => setContent(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Button variant='primary' type='submit'>
				{actionText}
			</Button>
		</Form>
	)
}

PostForm.propTypes = {
	action: PropTypes.func.isRequired,
	actionText: PropTypes.string.isRequired,
	title: PropTypes.string,
	author: PropTypes.string,
	publishedDate: PropTypes.string,
	shortDescription: PropTypes.string,
	content: PropTypes.string,
}

export default PostForm
