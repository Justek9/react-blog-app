//selectors
export const getAllPosts = ({ posts }) => {
	return posts
}
export const getPostById = ({ posts }, id) => {
	return posts.filter(post => post.id === id)[0]
}

// actions
const createActionName = actionName => `app/posts/${actionName}`

// action creators
const postsReducer = (statePart = [], action) => {
	switch (action.type) {
		default:
			return statePart
	}
}

export default postsReducer
