import express, { Request, Response } from 'express';
import { PostController } from '../Controllers/PostController';
import { PostBL } from '../BL/PostBL';
import { PostDataAccessSQL } from '../DAL/PostDataAccessSQL';
import isAdmin from "../middlewares/authorization";
const router = express.Router();
const postController = new PostController(new PostBL(new PostDataAccessSQL()));

router.post('/', isAdmin, async (req: Request, res: Response) => await postController.addPost(req,res));
router.get('/:id', async (req: Request, res: Response) => await postController.getPost(req,res));
router.get('/', async (req: Request, res: Response) => await postController.getAllPosts(req,res));
router.put('/:id', isAdmin, async (req: Request, res: Response) => await postController.updatePost(req,res));
router.delete('/:id', isAdmin, async (req: Request, res: Response) => await postController.deletePost(req,res));
router.post('/count', async (req: Request, res: Response) => await postController.getNumberOfPosts(req,res));

export default router;
