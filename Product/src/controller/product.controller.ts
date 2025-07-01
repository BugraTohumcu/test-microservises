import { Request, Response } from "express";
import { ProductService } from "../service/product.service";
import { NewProduct } from "../dto/newProductDto";
export class ProductController{
    private productService: ProductService;
    constructor(productService: ProductService){
        this.productService = productService;
    }

    // getAllProducts = async (req:Request , res: Response) => {
    //    try{
    //      let data = await this.productService.getProducts();
    //      res.json(data?.rows);
    //      console.debug('Products fetched');
    //    }catch(err){
    //         if(err instanceof Error){
    //             console.error(err);
    //         }
    //    }
    // }

    createProduct = async (req:Request , res:Response)=> {
    let newProduct: NewProduct = req.body;
    try{
        await this.productService.createProduct(newProduct);
        console.debug('Product Created');
        res.status(201).json({message: 'Created'});
    }catch(err){
        if(err instanceof Error){
            console.error(err);
            res.status(500).json({message : 'Server Error'})
        }
    }
    };
}