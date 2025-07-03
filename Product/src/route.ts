import { Router } from "express";
import { productRouter } from "./routers/product.router";


export const router = Router();

router.use(productRouter);

