import { PrismaClient } from "@prisma/client";
import { NewProduct } from "../dto/newProductDto";
export class ProductRepo{
    
    protected prisma: PrismaClient;

    constructor(prisma:PrismaClient){
        this.prisma = new PrismaClient();
    }

    // Get all products without orm
    // getAll =  async (): Promise<QueryResult<Product[]> | undefined> => {
    //     let sql:string = 'SELECT * FROM product';
    //     let result = await this.con.query(sql);
    //     return result;
    // }

    create = async (product:NewProduct) => {
        let name = product.name;
        let price = product.price;
        await this.prisma.product.create({
            data: {name,price}
        });
    }

    

}