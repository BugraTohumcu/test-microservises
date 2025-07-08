import { Router } from "express";
import { userRouter } from "./routes/user.router";

export const router = Router();

router.use(userRouter);