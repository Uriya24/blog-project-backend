import {Request, Response} from 'express';
import Post from '../models/Post';
import {PostBL} from '../BL/PostBL';

export class PostController {

    private postBL: PostBL;

    constructor(postBL: PostBL) {
        this.postBL = postBL;
    }

    async addPost(req: Request, res: Response): Promise<void> {
        const postData = req.body;
        const newPost = new Post( postData.title, postData.content, postData.date, postData.posted_by);
        try {
            const postId = await this.postBL.addPost(newPost);
            res.status(201).send({id: postId, message: `Post ${postId} created successfully`});
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async getPost(req: Request, res: Response): Promise<void> {
        const postId = Number(req.params.id);
        try {
            const post = await this.postBL.getPost(postId);
            res.status(200).send(post);
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async getAllPosts(req: Request, res: Response): Promise<void> {
        try {
            const from = req.query.from ? parseInt(req.query.from as string) : undefined;
            const to = req.query.to ? parseInt(req.query.to as string) : undefined;
            const filterText = req.query.filterText ? req.query.filterText as string : undefined;
            const posts = await this.postBL.getAllPosts(from, to, filterText);
            res.status(200).send(posts);
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async updatePost(req: Request, res: Response): Promise<void> {
        const postId = parseInt(req.params.id);
        const postData = req.body;
        try {
            await this.postBL.updatePost(postId, postData);
            res.status(200).send({message: `Post ${postId} updated successfully`});
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async deletePost(req: Request, res: Response): Promise<void> {
        const postId = parseInt(req.params.id);
        try {
            await this.postBL.deletePost(postId);
            res.status(200).send({message: `Post ${postId} deleted successfully`});
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

    async getNumberOfPosts(req: Request, res: Response): Promise<void> {
        try {
            const numberOfPosts = await this.postBL.getNumberOfPosts();
            res.status(200).send({numberOfPosts});
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }
}
