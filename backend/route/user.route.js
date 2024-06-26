import express, { Router } from 'express';
import { signup , login, changePassword } from '../controller/user.controller.js';
const userRouter = express.Router();

userRouter.post('/signup' , signup);
userRouter.post('/login' , login);
userRouter.post('/update' , changePassword);
export default userRouter;