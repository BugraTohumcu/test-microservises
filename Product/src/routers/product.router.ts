import { ProductController } from "../controller/product.controller";
import { ProductRepo } from "../repository/product.repo";
import { ProductService } from "../service/product.service";
import { validateProduct } from "../middleware/product.validation";
import { prismaClient } from "../config/db";
import { Router } from "express";
import { validatePrice } from "../middleware/price.validator";

export const productRouter = Router();
const productRepo = new ProductRepo(prismaClient);
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

productRouter.post('/',validateProduct,productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:price', validatePrice, productController.getProduct);
productRouter.delete('/',productController.deleteProduct);

