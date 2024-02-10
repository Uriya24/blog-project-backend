import pool from '../db';
import User from '../models/User';
import UserResponse from "../types/UserResponse";

export class UserDataAccess {
    async getUserById(id: string): Promise<User | null> {
        try {
            const query = 'SELECT * FROM users WHERE id = $1';
            const result = await pool.query(query, [id]);

            if (result.rows.length > 0) {
                return result.rows[0] as User;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error getting user by ID', error);
            throw error;
        }
    }

    async addUser(user: User): Promise<UserResponse> {
        try {
            // Check if the user already exists in the database
            const existingUser = await this.getUserById(user.id);

            // If the user exists, return an indication that the user was already exists
            if (existingUser) {
                return {user : existingUser, message: `User ${user.email} already exists`};
            }

            // If the user doesn't exist, proceed to add the user
            const query = 'INSERT INTO users (id, email, name, admin) VALUES ($1, $2, $3, $4) RETURNING *';
            const results = await pool.query(query, [user.id, user.email, user.name, user.admin]);
            return {user: results.rows[0] as User, message: `User ${user.email} created successfully`};
        } catch (error) {
            console.error('Error adding user', error);
            throw error;
        }
    }
}
