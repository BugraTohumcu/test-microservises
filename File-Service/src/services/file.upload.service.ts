import { BlobServiceClient } from "@azure/storage-blob";
import { BlobClient } from "../config/blobClient";
import { UploadFile } from "../dto/file.dto/upload.file";


export class FileUploadService{
    private static instance : FileUploadService | null = null;
    private blobServiceClient : BlobServiceClient;

    constructor(){
        this.blobServiceClient = BlobClient.getInstance();
    }

    static getInstance = () => {
        if(!FileUploadService.instance){
            FileUploadService.instance = new FileUploadService();
        }
        return FileUploadService.instance;
    }

    uploadFile = async (newFile: UploadFile) => {
        const file = newFile.file;
        const id = newFile.fileID;
        const containerName = newFile.folderName
        if (!file) {
            throw new Error('File not foun!');
        }
        
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        await containerClient.createIfNotExists();
        await containerClient.setAccessPolicy('container');

        const blobClient = containerClient.getBlockBlobClient(file.originalname);
        await blobClient.uploadData(file.buffer, {
            blobHTTPHeaders: { blobContentType: file.mimetype }
        });
    }
}