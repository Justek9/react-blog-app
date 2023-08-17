import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Category = ({ category }) => {
	return (
		<Col xs='12' md='6' lg='4'>
			<Card className='mb-4'>
				<Card.Link href={`categories/${category}`}>{category}</Card.Link>{' '}
			</Card>
		</Col>
	)
}

export default Category
