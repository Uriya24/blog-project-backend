import express, { Request, Response } from 'express';
import { UserController } from '../Controllers/UserController';
import { UserBL } from '../BL/UserBL';
import { UserDataAccess } from '../DAL/UserDataAccess';
const router = express.Router();
const userController = new UserController(new UserBL(new UserDataAccess()));

router.post('/', async (req: Request, res: Response) => await userController.addUser(req,res));


export default router;
