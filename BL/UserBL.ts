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

    async logInUser(user: User): Promise<UserResponse> {
        if (user.email === process.env.MY_EMAIL || user.email === process.env.ILIA_EMAIL) {
            user = {...user, admin : true }
        }
        try {
            return await this.userDataAccess.logInUser(user);
        } catch (error) {
            throw new Error(`Unable to add Post: ${(error as Error).message}`);
        }
    }
}