import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/categoriesReudx'

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || '')
	const [author, setAuthor] = useState(props.author || '')
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date())
	const [shortDescription, setShortDescription] = useState(props.shortDescription || '')
	const [content, setContent] = useState(props.content || '')
	const [category, setCategory] = useState(props.category || '')

	const [contentError, setContentError] = useState(false)
	const [dateError, setDateError] = useState(false)

	const categories = useSelector(state => getAllCategories(state))
	console.log(categories)

	const handleSubmit = e => {
		// validate date and post content:
		setContentError(!content)
		setDateError(!publishedDate)
		if (content && publishedDate) {
			action({ title, author, publishedDate, shortDescription, content })
		}
	}

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm()

	return (
		<Form onSubmit={validate(handleSubmit)}>
			<Row>
				<Col xs='12' lg='6'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							{...register('title', { required: true, minLength: 4 })}
							value={title}
							onChange={e => setTitle(e.target.value)}
							type='text'
							placeholder='Enter title'
						/>
						{errors.title && (
							<small className='d-block form-text text-danger mt-2'>
								This field is required and should be at least 4 chararcters long
							</small>
						)}
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Author</Form.Label>
						<Form.Control
							{...register('author', { required: true, minLength: 4 })}
							type='text'
							placeholder='Enter author'
							value={author}
							onChange={e => setAuthor(e.target.value)}
						/>
						{errors.author && (
							<small className='d-block form-text text-danger mt-2'>
								This field is required and should be at least 4 chararcters long
							</small>
						)}
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Published</Form.Label>
						<DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
						{dateError && <small className='d-block form-text text-danger mt-2'>Date can't be empty</small>}
					</Form.Group>
				</Col>

				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>Category</Form.Label>
						<Form.Select aria-label='Select category' value={category} onChange={e => setCategory(e.target.value)}>
							{categories.map((category, i) => {
								return (
									<option key={i}>
										{category}
									</option>
								)
							})}
						</Form.Select>
					</Form.Group>
				</Col>

				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>Short Description</Form.Label>
						<Form.Control
							{...register('shortDescription', { required: true, minLength: 20 })}
							as='textarea'
							rows={5}
							placeholder='Leave a comment here'
							value={shortDescription}
							onChange={e => setShortDescription(e.target.value)}
						/>
						{errors.shortDescription && (
							<small className='d-block form-text text-danger mt-2'>
								This field is required and should be at least 20 chararcters long
							</small>
						)}
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Main Content</Form.Label>
						<ReactQuill
							theme='snow'
							placeholder='Leave a comment here'
							value={content}
							onChange={setContent}
							style={{ height: '350px', paddingBottom: '30px' }}
						/>
						{contentError && <small className='d-block form-text text-danger mt-2'>Content can't be empty</small>}
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
	publishedDate: PropTypes.object,
	shortDescription: PropTypes.string,
	content: PropTypes.string,
}

export default PostForm
