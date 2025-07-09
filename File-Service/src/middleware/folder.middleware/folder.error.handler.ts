import { NextFunction, Request, Response } from "express";
import { FolderException } from "../../exception/folder.exception";
import { logger } from "../../config/logger";

export const folderErrorHandler = (err:FolderException, req:Request, res:Response, next:NextFunction) => {
    logger.info(err);
    res.status(400).json({message: err.message, details: err.details});
}