import { PrismaClient } from "@prisma/client";


export class PCLient {
    private static instance: PrismaClient | null;

    static getInstance = () => {
        if(!PCLient.instance){
            PCLient.instance = new PrismaClient();
        }
        return PCLient.instance;
    }
}