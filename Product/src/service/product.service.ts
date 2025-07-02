import { NewProduct } from "../dto/newProductDto";
import { ProductRepo } from "../repository/product.repo";

export class ProductService{
    private productRepo: ProductRepo;
    constructor(productRepo:ProductRepo){
        this.productRepo = productRepo;
    }
    
    getProducts = async () => {
        return this.productRepo.getAll();
    }
    
    createProduct = async (newProduct : NewProduct) => {
        this.productRepo.create(newProduct);
    }

    getByPrice = async (price : number) => {
        const product = await this.productRepo.findByPrice(price);
        if(!product?.length) throw new Error('Product not found!');
        return  product;
    }

    public deleteByName = async (name:string) => {
        const product = await this.productRepo.findByName(name);
        const id = product?.id;
        return await this.productRepo.delete(id);
    }
}