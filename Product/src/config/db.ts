import { Pool, QueryResult } from 'pg';
import { Product } from '../model/product.model';


export class DBCON{
    protected con: Pool;
    constructor(){
        this.con = new Pool({
            database:'ecom-app',
            user:'postgres',
            password:'12345',
            port:5432,
            host:'localhost',
            idleTimeoutMillis:(30 * 1000),
            max:20
        });
    }
}