import { Request, Response } from "express";
import { ProductService } from "../service/product.service";

export class ProductController{
    private productService: ProductService;
    constructor(productService: ProductService){
        this.productService = productService;
    }

    getAllProducts = async (req:Request , res: Response) => {
       try{
         let data = await this.productService.getProducts();
         res.json(data?.rows);
         console.debug('Products fetched');
       }catch(err){
            if(err instanceof Error){
                console.error(err);
            }
       }
    }
}