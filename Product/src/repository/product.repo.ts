import { PrismaClient } from "@prisma/client";
import { NewProduct } from "../dto/newProductDto";
export class ProductRepo{
    
    private prisma: PrismaClient;
    
    constructor(prisma:PrismaClient){
        this.prisma = new PrismaClient();
    }
    
    // Get all products without orm
    public getAll =  async () => {
        return await this.prisma.product.findMany();
    }
    
    public create = async (product:NewProduct) => {
        let name = product.name ;
        let price = product.price;
        await this.prisma.product.create({
            data: {name,price}
        });
    }

    public findByPrice = async (price: number) =>  {
        return await this.prisma.product.findMany({
            where: {
                price :price
            }
        })
    }


}