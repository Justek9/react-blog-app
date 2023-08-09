import Button from 'react-bootstrap/Button'
import AllPosts from '../features/AllPosts'
import { NavLink } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<div className='d-flex justify-content-between mb-4'>
				<h3>All posts</h3>
				<Button variant='outline-info' as={NavLink} to='/post/add'>
					Add post
				</Button>
			</div>
			<AllPosts />
		</div>
	)
}

export default Home
