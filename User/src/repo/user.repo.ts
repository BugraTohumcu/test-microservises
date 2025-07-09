import { PrismaClient } from "@prisma/client";
import { NewUser } from "../dto/userDto";
import { PClient} from "../config/prisma";

export class UserRepo{
    private prisma : PrismaClient;
    private static instance: UserRepo | null; 

    constructor(prisma : PrismaClient){
        this.prisma = prisma;
    }

    static getInstance = ()=> {
        if(!UserRepo.instance){
            const prisma = PClient.getInstance();
            UserRepo.instance = new UserRepo(prisma);
        }
        return UserRepo.instance;
    }

    findAll = async () => {
        return await this.prisma.user.findMany();
    }
    
    save = async(user: NewUser) => {
        return await this.prisma.user.create({
                data: {
                    name : user.name,
                    age: user.age
                }
        });
    }
}
