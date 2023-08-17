// import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Category = ({ category }) => {
	return (
		<ListGroup.Item>
			<Card.Link href={`categories/${category}`}>{category}</Card.Link>
		</ListGroup.Item>
	)
}

export default Category
