import { Express } from "express";

export interface UploadFile{
    file : Express.Multer.File 
    fileID: number
    folderName: string
}