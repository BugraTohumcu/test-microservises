import { Router } from "express";
import { FolderController } from "../controller/folder.controller";
import { validateCreateFolder, validateDeleteFolder, validateUpdateFolder } from "../middleware/folder.middleware/folder.validation";


const folderController = FolderController.getInstance();
export const folderRouter = Router();


// .../folder
folderRouter.get('/',folderController.getFolders);
folderRouter.post('/', validateCreateFolder, folderController.createFolder);
folderRouter.delete('/:id', validateDeleteFolder, folderController.deleteFolder);
folderRouter.put('/', validateUpdateFolder, folderController.updateFolder);



