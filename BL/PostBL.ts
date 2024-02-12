import { DataAccess } from '../DAL/DataAccess';
import Post from '../models/Post';

export class PostBL {
    private postDataAccess: DataAccess<Post>;

    constructor(postDataAccess: DataAccess<Post>) {
        this.postDataAccess = postDataAccess;
    }

    async addPost(post: Post): Promise<number> {
        try {
            return await this.postDataAccess.add(post);
        } catch (error) {
            throw new Error(`Unable to add Post: ${(error as Error).message}`);
        }
    }

    async getPost(postId: number): Promise<Post> {
        const Post = await this.postDataAccess.get(postId);
        if (!Post) {
            throw new Error(`Post with ID ${postId} not found`);
        }
        return Post;
    }

    async getAllPosts(from?: number, to?: number, filterText?: string ): Promise<Partial<Post>[]> {
        try {
            const posts = await this.postDataAccess.getAll(from, to, filterText);
            return posts;
        } catch (error) {
            throw new Error(`Unable to get all posts: ${(error as Error).message}`);
        }
    }

    async updatePost(postId: number, updateData: Partial<Post>): Promise<void> {
        try {
            await this.postDataAccess.update(postId, updateData);
        } catch (error) {
            throw new Error(`Unable to update Post: ${(error as Error).message}`);
        }
    }

    async deletePost(postId: number): Promise<void> {
        try {
            await this.postDataAccess.delete(postId);
        } catch (error) {
            throw new Error(`Unable to delete Post: ${(error as Error).message}`);
        }
    }

    async getNumberOfPosts(): Promise<number> {
        try {
            return await this.postDataAccess.getNumberOfPosts();
        } catch (error) {
            throw new Error(`Unable to get number of posts: ${(error as Error).message}`);
        }
    }
}