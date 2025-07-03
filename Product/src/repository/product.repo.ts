import { PrismaClient } from "@prisma/client";
import { NewProduct } from "../dto/newProductDto";
export class ProductRepo{
    
    private prisma: PrismaClient;
    
    constructor(prisma:PrismaClient){
        this.prisma = new PrismaClient();
    }
    
    getAll =  async () => {
        return await this.prisma.product.findMany();
    }
    
    create = async (product:NewProduct) => {
        let name = product.name ;
        let price = product.price;
        await this.prisma.product.create({
            data: {name,price}
        });
    }

    findByPrice = async (price: number) =>  {
        return await this.prisma.product.findMany({
            where: {
                price :price
            }
        })
    }

    delete = async(p_id: number | undefined) => {
        return await this.prisma.product.delete({
            where: {
                id:p_id
            }
        })
    }

    findByName = async (pname: string) => {
        return await this.prisma.product.findFirst({
            where: {
                name: pname
            }
        })
    }


}