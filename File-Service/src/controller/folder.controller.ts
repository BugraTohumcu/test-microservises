import { NextFunction, Request, Response } from "express";
import { FolderService } from "../service/folder.service";
import { CreateFolderDTO } from "../dto/folder.dto/create.folder.dto";
import { logger } from "@azure/storage-blob";
import { UpdateFolderDTO } from "../dto/folder.dto/update.folder.dto";

export class FolderController{
    private static instance: FolderController | null = null;
    private folderService: FolderService;

    constructor(folderService:FolderService){
        this.folderService = folderService;
    }

    static getInstance= () => {
        if(!FolderController.instance){
            const folderService = FolderService.getInstance();
            FolderController.instance = new FolderController(folderService);
        }
        return FolderController.instance;
    }

    createFolder = async (req:Request, res:Response) => {
        try{
            const newFolder: CreateFolderDTO = req.body;
            const createdFolder = await this.folderService.createNewFolder(newFolder);
            logger.info('New Folder Created');
            res.json({folder: createdFolder});
        }catch(err){
            logger.info(err);
            res.status(400).json({error: err});
        }
    }

    deleteFolder = async (req:Request, res:Response) => {
        try{
            const folderId: number = +req.params.id;
            const deletedFolder = await this.folderService.delteFolder(folderId);
            logger.info('Folder Deleted');
            res.json({folder: deletedFolder});
        }catch(err){
            logger.info(err);
            res.status(400).json({error: err});
        }
    }

    getFolders = async(req:Request, res:Response, next:NextFunction) => {
        try{
            const data = await this.folderService.getAllFolders();
            logger.info('Folders Fetched');
            res.json(data);
        }catch(err){
            logger.error('Something went wrong while getting folder: ' + err);
            next(err);
        }
    }

    updateFolder = async (req: Request, res:Response, next:NextFunction) => {
        try{
            const existingFolder: UpdateFolderDTO = req.body;
            const newFolder = await this.folderService.updateFolder(existingFolder);
            logger.info('Folder updated successfuly');
            res.json({folder: newFolder});
        }catch(err){
            logger.error('Something went wrong while updating folder: ' + err);
            next(err);
        }
    }
}