import Category from './Category'
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/categoriesReudx'
import Row from 'react-bootstrap/esm/Row'
import { Container } from 'react-bootstrap'

const AllCatagories = () => {
	const categories = useSelector(state => getAllCategories(state))

	return (
		<Container>
			<h2>All categories</h2>
			<Row className='d-flex flex-column'>
				{categories.map((category, id) => (
					<Category key={id} category={category}></Category>
				))}
			</Row>
		</Container>
	)
}
export default AllCatagories
