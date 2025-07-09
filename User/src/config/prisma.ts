import { PrismaClient } from "@prisma/client"
export const prismaClient = new PrismaClient();

export class PClient{
    private static instance : PrismaClient | null;

    constructor(){
        if(PClient.instance){
            throw new Error('Please Use getInstance() instead of new');
        }
    }

    static getInstance = () => {
        if(!PClient.instance){
            PClient.instance = new PrismaClient();
        }

        return PClient.instance;
    }
}