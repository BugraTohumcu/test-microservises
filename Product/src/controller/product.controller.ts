import { Request, Response , NextFunction} from "express";
import { ProductService } from "../service/product.service";
import { NewProduct } from "../dto/newProductDto";
import { logger } from "../config/logger";
export class ProductController{
    private productService: ProductService;
    constructor(productService: ProductService){
        this.productService = productService;
    }

    public getAllProducts = async (req:Request , res: Response, next:NextFunction) => {
       try{
         let data = await this.productService.getProducts();
         logger.info('Products fetched');
         res.json(data);
       }catch(err){
            if(err instanceof Error){
               next(err);
            }
       }
    }

    public createProduct = async (req:Request , res:Response, next:NextFunction)=> {
    let newProduct: NewProduct = req.body;
    try{
        await this.productService.createProduct(newProduct);
        logger.info('Product Created');
        res.status(201).json({message: 'Created'});
    }catch(err){
        if(err instanceof Error){
            next(err);
        }
    }
    }

    public getProduct = async(req: Request , res:Response, next:NextFunction) =>{
        const price:number = Number(req.params.price);
        try{
            const products = await this.productService.getByPrice(price);
            logger.info('Products fetched by price');
            res.json({products : products});
        }catch(err){
            if(err instanceof Error){
                next(err);
            }
        }
    }

    public deleteProduct= async (req:Request, res:Response, next:NextFunction) => {
        try{
            const name = req.body.name;
            await this.productService.deleteByName(name);
            logger.info('Product deleted');
            res.status(200).json({message:'Product deleted'});
        }catch(err){
            next(err);
        }
    }
}