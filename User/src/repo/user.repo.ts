import { PrismaClient } from "@prisma/client";
import { NewUser } from "../dto/userDto";

export class UserRepo{
    private prisma : PrismaClient;

    constructor(prisma : PrismaClient){
        this.prisma = prisma;
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
