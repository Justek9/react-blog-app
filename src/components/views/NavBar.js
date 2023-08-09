import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Nav className='me-auto d-flex justify-content-between align-items-center bg-primary rounded mb-2'>
			<Nav.Link className='text-white' as={NavLink} to='/'>
				Blog.app
			</Nav.Link>
			<div className='d-flex justify-content-end align-items-center'>
				<Nav.Link className='text-white' as={NavLink} to='/'>
					Home
				</Nav.Link>
				<Nav.Link className='text-white' as={NavLink} to='/about'>
					About
				</Nav.Link>
			</div>
		</Nav>
	)
}

export default NavBar