import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { validateUser } from "../middleware/user.validation";
import { UserRepo } from "../repo/user.repo";
import { prismaClient } from "../config/prisma";
import { UserService } from "../service/user.service";

export const userRouter = Router();

const userRepo = new UserRepo(prismaClient);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

userRouter.get('/users', userController.getUsers);
userRouter.post('/users',validateUser, userController.addUser);