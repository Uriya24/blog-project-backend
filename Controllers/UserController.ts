import {Request, Response} from 'express';
import User from '../models/User';
import {UserBL} from '../BL/UserBL';
import jwt from "jsonwebtoken";

export class UserController {

    private userBL: UserBL;

    constructor(userBL: UserBL) {
        this.userBL = userBL;
    }

    async addUser(req: Request, res: Response): Promise<void> {
        const userData = req.user as User;
        try {
            const userRes = await this.userBL.addUser(userData);
            const jwt = createJWT(userRes.user);
            res.cookie('jwt', jwt, { httpOnly: true, maxAge:  1000 * 60 * 60, domain: 'localhost', sameSite: 'lax' });
            res.status(201).send(userRes);
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }
}


const createJWT = (user: User) => {
    console.log('jwt secret code: ', process.env.JWT_SECRET);
    return jwt.sign(user, process.env.JWT_SECRET as string,{expiresIn: '1h'})
}