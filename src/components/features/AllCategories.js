import Category from './Category'
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/categoriesReudx'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/esm/Col'

const AllCatagories = () => {
	const categories = useSelector(state => getAllCategories(state))

	return (
		<Col className='ml-3'>
			<Card.Title as='h2' className='mb-3'>
				All categories:
			</Card.Title>
			<Card style={{ width: '18rem' }}>
				<ListGroup variant='flush'>
					{categories.map((category, id) => (
						<Category key={id} category={category}></Category>
					))}
				</ListGroup>
			</Card>
		</Col>
	)
}
export default AllCatagories
