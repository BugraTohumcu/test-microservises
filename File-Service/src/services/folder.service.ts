import { logger } from "../config/logger";
import { CreateFolderDTO } from "../dto/folder.dto/create.folder.dto";
import { UpdateFolderDTO } from "../dto/folder.dto/update.folder.dto";
import { FolderRepo } from "../repo/folder.repo";
import { FOLDER_ERRORS_BACKEND } from "../shared/messages/folder.errors/folder.error.backend";

export class FolderService{
    private static instance: FolderService | null = null;
    private folderRepo: FolderRepo;

    constructor(folderRepo: FolderRepo){
        this.folderRepo = folderRepo;
    }

    static getInstance= () => {
        if(!FolderService.instance){
            const folderRepo = FolderRepo.getInstance();
            FolderService.instance = new FolderService(folderRepo);
        }
        return FolderService.instance;
    }

    createNewFolder =  async (newFolder: CreateFolderDTO) => {
        return await this.folderRepo.save(newFolder);
    }

    delteFolder =  async (folderId: number) => {
        return await this.folderRepo.deleteById(folderId);
    }

    getAllFolders = async () => {
        return await this.folderRepo.getAll();
    }

    updateFolder = async (folder:UpdateFolderDTO) => {
        logger.info(folder.f_id);
        if(isNaN(folder.f_id)) throw new Error(FOLDER_ERRORS_BACKEND.ID_INVALID);
        const existingFolder = await this.folderRepo.getById(folder.f_id);
        
        if(!existingFolder){
            throw new Error('Folder not found!');
        }

        return await this.folderRepo.updateById(folder);
    }
}