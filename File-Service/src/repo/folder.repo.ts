import { PrismaClient } from "@prisma/client";
import { PCLient } from "../config/prisma";
import { CreateFolderDTO } from "../dto/folder.dto/create.folder.dto";
import { UpdateFolderDTO } from "../dto/folder.dto/update.folder.dto";


export class FolderRepo{
    private static instance: FolderRepo | null = null;
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient){
        this.prisma = prisma
    }

    static getInstance= () => {
        if(!FolderRepo.instance){
            const prisma = PCLient.getInstance();
            FolderRepo.instance = new FolderRepo(prisma);
        }
        return FolderRepo.instance;
    }

    save = async (folder:CreateFolderDTO) => {
        return await this.prisma.folder.create({
            data: {
                title: folder.title,
                description: folder.description,
                organization: folder.organization,
                color: folder.color
            }
        });
    }

    deleteById = async (folderID:number) => {
        return await this.prisma.folder.delete({
            where: {
                f_id: folderID
            }
        });
    }

    getAll = async () =>{
        return await this.prisma.folder.findMany();
    }

    getById = async (id: number) => {
        return await this.prisma.folder.findUnique({
            where: {f_id: id}
        });
    }

    updateById = async(folder: UpdateFolderDTO) => {
        return await this.prisma.folder.update({
            where: { f_id: folder.f_id },
            data: folder
        });
    }
}