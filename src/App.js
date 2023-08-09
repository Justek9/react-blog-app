import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Post from './components/pages/ShowPost'
import AddPost from './components/pages/AddPost'
import EditPost from './components/pages/EditPost'
import NotFound from './components/pages/NotFound'
import Header from './components/views/Header'
import Footer from './components/views/Footer'


function App() {

	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/post/:id' element={<Post />}></Route>
				<Route path='/post/add' element={<AddPost />}></Route>
				<Route path='/post/edit/:id' element={<EditPost />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/*' element={<NotFound />} />
			</Routes>


			<Footer />
		</Container>
	)
}

export default App
