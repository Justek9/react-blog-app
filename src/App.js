import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Posts from './components/pages/Posts'
import Post from './components/pages/Post'
import AddPost from './components/pages/AddPost'
import EditPost from './components/pages/EditPost'
import NotFound from './components/pages/NotFound'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Posts />}></Route>
			<Route path='/post/:id' element={<Post />}></Route>
			<Route path='/post/add' element={<AddPost />}></Route>
			<Route path='/post/edit/:id' element={<EditPost />}></Route>
			<Route path='/about' element={<About />}></Route>
			<Route path='/*' element={<NotFound />} />
		</Routes>
	)
}

export default App
