import { ProductRepo } from "../repository/product.repo";

export class ProductService{
    private productRepo: ProductRepo;
    constructor(productRepo:ProductRepo){
        this.productRepo = productRepo;
    }

    getProducts = async () => {
        return this.productRepo.getAll();
    }
}