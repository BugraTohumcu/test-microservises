import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';
dotenv.config();

export class BlobClient {
    private static instance: BlobServiceClient | null;

    
    static getInstance = () => {
        if(!BlobClient.instance){
            const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!;
            BlobClient.instance = BlobServiceClient.fromConnectionString(connectionString);
        }
        return BlobClient.instance;
    }


}