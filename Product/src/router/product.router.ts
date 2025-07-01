import { ProductController } from "../controller/product.controller";
import { ProductRepo } from "../repository/product.repo";
import { ProductService } from "../service/product.service";
import { validateProduct } from "../middleware/product.validation";
import { prismaClient } from "../config/db";
import { Router } from "express";

const router = Router();
let productRepo = new ProductRepo(prismaClient);
let productService = new ProductService(productRepo);
let productController = new ProductController(productService);

router.post ('/',validateProduct,productController.createProduct);

export{
    router
}