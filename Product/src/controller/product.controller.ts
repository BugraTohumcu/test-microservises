import { Request, Response , NextFunction} from "express";
import { ProductService } from "../service/product.service";
import { NewProduct } from "../dto/newProductDto";
export class ProductController{
    private productService: ProductService;
    constructor(productService: ProductService){
        this.productService = productService;
    }

    public getAllProducts = async (req:Request , res: Response, next:NextFunction) => {
       try{
         let data = await this.productService.getProducts();
         res.json(data);
         console.debug('Products fetched');
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
        console.debug('Product Created');
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
            console.log('Products fetched by price');
            res.json({products : products});
        }catch(err){
            if(err instanceof Error){
                next(err);
            }
        }
    }
}