const initialState = {
	posts: [
		{
			id: '1',
			title: 'Title 1',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2023'),
			author: 'John Doe',
			category: 'Sport',
		},

		{
			id: '2',
			title: 'Title 2',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-03-2023'),
			author: 'John Doe',
			category: 'Sport',
		},
		{
			id: '3',
			title: 'Title 3',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-04-2023'),
			author: 'John Doe',
			category: 'News',
		},
		{
			id: '4',
			title: 'Title 4',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-05-2023'),
			author: 'John Doe',
			category: 'Movies',
		},
	],
	categories: ['Sport', 'News', 'Movies'],
}

export default initialState
