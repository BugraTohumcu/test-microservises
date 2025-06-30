import { ProductController } from "../controller/product.controller";
import { ProductRepo } from "../repository/product.repo";
import { ProductService } from "../service/product.service";

import { Router } from "express";

let router = Router();
let productRepo = new ProductRepo();
let productService = new ProductService(productRepo);
let productController = new ProductController(productService);

router.get('/', productController.getAllProducts);

export{
    router
}