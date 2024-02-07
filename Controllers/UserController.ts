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
        try {
            const response = await this.userBL.addUser(userData);
            res.status(201).send(response);
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }
}