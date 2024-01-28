import {Request, Response} from 'express';
import User from '../models/User';
import {UserBL} from '../BL/UserBL';

export class UserController {

    private userBL: UserBL;

    constructor(userBL: UserBL) {
        this.userBL = userBL;
    }

    async addUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;
        const newUser = new User(userData.sub, userData.email, userData.name, false);
        try {
            const resMessage = await this.userBL.addUser(newUser);
            res.status(201).send({ message: resMessage });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }
}