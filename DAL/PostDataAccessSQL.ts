import pool from '../db';
import Post from '../models/Post';
import {DataAccess} from './DataAccess';

export class PostDataAccessSQL implements DataAccess<Post> {
    async add(post: Post): Promise<void> {
        try {
            const query = 'INSERT INTO posts (title, content, date) VALUES ($1, $2, $3)';
            await pool.query(query, [post.title, post.content, post.date]);
        } catch (error) {
            console.error('Error adding post', error);
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const query = 'DELETE FROM posts WHERE id = $1';
            await pool.query(query, [id]);
        } catch (error) {
            console.error('Error deleting post', error);
            throw error;
        }
    }

    async update(id: number, updateData: Partial<Post>): Promise<void> {
        try {
            const query = 'UPDATE posts SET title = $2, content = $3, date = $4 WHERE id = $1';
            await pool.query(query, [id, updateData.title, updateData.content, updateData.date]);
        } catch (error) {
            console.error('Error updating post', error);
            throw error;
        }
    }

    async get(id: number): Promise<Post> {
        try {
            const query = 'SELECT * FROM posts WHERE id = $1';
            const result = await pool.query(query, [id]);
            if (result.rows.length === 0) {
                throw new Error('Post not found');
            }
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching post', error);
            throw error;
        }
    }

    async getAll(from?: Date, to?: Date, filterText?: string): Promise<Partial<Post>[]> {
        if (to) {
            to.setDate(to.getDate() + 1);
        }

        if (filterText !== undefined && (from !== undefined && to !== undefined)) {
            const query = {
                text: "SELECT * FROM posts WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(content) LIKE LOWER($1)) AND date BETWEEN $2 AND $3",
                values: [`%${filterText}%`, from, to]
            };
            try {
                const posts = await pool.query(query);
                return posts.rows;
            } catch (e) {
                console.log(e)
                throw e
            }

        }

        if (filterText !== undefined) {
            const query = {
                text: "SELECT * FROM posts WHERE LOWER(title) LIKE LOWER($1) OR LOWER(content) LIKE LOWER($1)",
                values: [`%${filterText}%`],
            };
            try {
                const posts = await pool.query(query);
                return posts.rows;
            } catch (e) {
                console.log(e)
                throw e
            }
        }

        if (from !== undefined && to !== undefined) {
            const query = {
                text: "SELECT * FROM posts WHERE date BETWEEN $1 AND $2",
                values: [from, to]
            };
            const posts = await pool.query(query);
            return posts.rows;
        } else {
            const posts = await pool.query("SELECT * FROM posts ORDER BY date DESC")
            return posts.rows
        }
    }

}
