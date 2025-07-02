import { ProductController } from "../controller/product.controller";
import { ProductRepo } from "../repository/product.repo";
import { ProductService } from "../service/product.service";
import { validateProduct } from "../middleware/product.validation";
import { prismaClient } from "../config/db";
import { Router } from "express";

const router = Router();
const productRepo = new ProductRepo(prismaClient);
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

router.post('/',validateProduct,productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:price', productController.getProduct);

export{
    router
}