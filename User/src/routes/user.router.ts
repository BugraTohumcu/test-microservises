import { Router } from "express";
import { validateUser } from "../middleware/user.validation";
import { UserController } from "../controller/user.controller";

export const userRouter = Router();


const userController = UserController.getInstance();

userRouter.get('/users', userController.getUsers);
userRouter.post('/users',validateUser, userController.addUser);