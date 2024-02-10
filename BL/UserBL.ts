import { UserDataAccess } from '../DAL/UserDataAccess';
import User from '../models/User';
import dotenv from 'dotenv';
import UserResponse from "../types/UserResponse";
dotenv.config();

export class UserBL {
    private userDataAccess: UserDataAccess;

    constructor(userDataAccess: UserDataAccess) {
        this.userDataAccess = userDataAccess;
    }

    async addUser(user: User): Promise<UserResponse> {
        if (user.id === process.env.SUB) {
            user = {...user, admin : true }
        }
        try {
            return await this.userDataAccess.addUser(user);
        } catch (error) {
            throw new Error(`Unable to add Post: ${(error as Error).message}`);
        }
    }
}