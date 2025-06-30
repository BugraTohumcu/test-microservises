import { DBCON } from "../config/db";
import { QueryResult } from "pg";
import { Product } from "../model/product.model";
export class ProductRepo extends DBCON{
    constructor(){
        super();
    }

    // Get all products
    getAll =  async (): Promise<QueryResult<Product[]> | undefined> => {
        let sql:string = 'SELECT * FROM product';
        let result = await this.con.query(sql);
        return result;
    }

}