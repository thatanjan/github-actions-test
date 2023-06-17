// Import dependencies
const express = require('express')

// Create Express app
const app = express()

// Array of users
const users = [
	{ id: 1, name: 'John Doe', age: 25 },
	{ id: 2, name: 'Jane Smith', age: 30 },
	{ id: 3, name: 'Alice Johnson', age: 28 },
	{ id: 4, name: 'Bob Williams', age: 35 },
	{ id: 5, name: 'Emily Davis', age: 32 },
	{ id: 6, name: 'Michael Brown', age: 27 },
	{ id: 7, name: 'Sophia Wilson', age: 31 },
	{ id: 8, name: 'David Thompson', age: 29 },
	{ id: 9, name: 'Olivia Martin', age: 26 },
	{ id: 10, name: 'Daniel Anderson', age: 33 },
]

// GET route to retrieve a user by ID
app.get('/user/:id', (req, res) => {
	const userId = parseInt(req.params.id)
	const user = users.find(user => user.id === userId)

	if (!user) {
		res.status(404).send('User not found')
	} else {
		res.json(user)
	}
})

// Start the server
const port = 3000
const server = app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})

module.exports = { app, server }
