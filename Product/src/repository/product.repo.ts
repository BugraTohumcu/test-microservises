import { PrismaClient } from "@prisma/client";
import { NewProduct } from "../dto/newProductDto";
export class ProductRepo{
    
    protected prisma: PrismaClient;

    constructor(prisma:PrismaClient){
        this.prisma = new PrismaClient();
    }

    // Get all products without orm
    getAll =  async () => {
        return await this.prisma.product.findMany();
    }

    create = async (product:NewProduct) => {
        let name = product.name;
        let price = product.price;
        await this.prisma.product.create({
            data: {name,price}
        });
    }

    

}