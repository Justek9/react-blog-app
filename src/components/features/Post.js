import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'
import { NavLink } from 'react-router-dom'

const Post = ({ post }) => {
	return (
		<Col xs='12' md='6' lg='4'>
			<Card className='mb-4'>
				<Card.Body>
					<Card.Title as='h4' className='mb-3'>
						{post.title}
					</Card.Title>
					<Card.Text className='mb-0'>
						<span className='fw-bold'>Author: </span>
						{post.author}
					</Card.Text>
					<Card.Text>
						<span className='fw-bold'>Published: </span>
						{post.publishedDate}
					</Card.Text>
					<Card.Text>{post.shortDescription}</Card.Text>
					<Button variant='primary' as={NavLink} to={`/post/${post.id}`}>
						Read more
					</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default Post
