// postsRoute.test.ts
import request from 'supertest';
import {app} from '../index';


describe('POST /api/posts', () => {
    test('should add a new post', async () => {
        const response = await request(app)
            .post('/api/posts')
            .send({ title: 'Test Post', content: 'This is a test post', date:"2024-05-05" });

        expect(response.statusCode).toBe(201);
    });
});

describe('GET /api/posts/:id', () => {
    test('should get a specific post', async () => {
        const response = await request(app).get('/api/posts/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
    });
});

describe('GET /api/posts', () => {
    test('should get all posts', async () => {
        const response = await request(app).get('/api/posts');

        expect(response.statusCode).toBe(200);
    });
});

describe('PUT /api/posts/:id', () => {
    test('should update a specific post', async () => {
        // Assuming you have a post with ID 1 in your database
        const response = await request(app)
            .put('/api/posts/36')
            .send({ title: 'Updated Post', content: 'This is an updated post', date: "2024-07-05" });

        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE /api/posts/:id', () => {
    test('should delete a specific post', async () => {
        const response = await request(app).delete('/api/posts/35');

        expect(response.statusCode).toBe(200);
    });
});
