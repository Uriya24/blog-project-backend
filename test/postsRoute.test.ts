// postsRoute.test.ts
import request from 'supertest';
import {app} from '../index';
import {PostDataAccessSQL} from "../DAL/PostDataAccessSQL";
import Post from "../models/Post";

const testPost = new Post('Test Post', 'This is a test post', new Date(), 'Test User');


describe('POST /api/posts', () => {
    test('should add a new post', async () => {
        const response = await request(app)
            .post('/api/posts')
            .send(testPost);

        expect(response.statusCode).toBe(201);

        const dataAccess = new PostDataAccessSQL();
        await dataAccess.delete(response.body.id);
    });
});

describe('GET /api/posts/:id', () => {
    test('should get a specific post', async () => {
        const dataAccess = new PostDataAccessSQL();
        const postId = await dataAccess.add(testPost);

        const response = await request(app).get(`/api/posts/${postId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(postId);

        await dataAccess.delete(response.body.id);
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
        const dataAccess = new PostDataAccessSQL();
        const postId = await dataAccess.add(testPost);

        const response = await request(app)
            .put(`/api/posts/${postId}`)
            .send({ title: 'Updated Post', content: 'This is an updated post', date: "2024-07-05" });

        expect(response.statusCode).toBe(200);

        await dataAccess.delete(postId);
    });
});

describe('DELETE /api/posts/:id', () => {
    test('should delete a specific post', async () => {
        const dataAccess = new PostDataAccessSQL();
        const postId = await dataAccess.add(testPost);

        const response = await request(app).delete(`/api/posts/${postId}`);

        expect(response.statusCode).toBe(200);
    });
});
