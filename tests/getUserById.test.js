const request = require('supertest')

const { app, server } = require('../src/index')

// Closing the server after all the test cases
afterAll(done => {
	server.close(done)
})

describe('GET /user/:id', () => {
	it('should return the user with the specified ID', async () => {
		const userId = 3
		const response = await request(app).get(`/user/${userId}`)

		expect(response.status).toBe(200)
		expect(response.body).toEqual({
			id: 3,
			name: 'Alice Johnson',
			age: 28,
		})
	})

	it('should return a 404 error if the user is not found', async () => {
		const userId = 99
		const response = await request(app).get(`/user/${userId}`)

		expect(response.status).toBe(404)
		expect(response.text).toBe('User not found')
	})
})
