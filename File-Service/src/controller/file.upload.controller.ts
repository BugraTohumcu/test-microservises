import { Router } from "express";
import multer from 'multer';
import { BlobServiceClient } from "@azure/storage-blob";
import { Request, Response } from "express";
const router = Router();
const upload = multer();
import dotenv from 'dotenv'
dotenv.config();

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!;
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

const containerName = "test-container";

router.post("/upload", upload.single("file"), async (req: Request, res: Response) => {

  
  if (!req.file) {
    res.status(400).send("File not found!");
    return;
  }
    
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.createIfNotExists();
  await containerClient.setAccessPolicy('container');

  const blobClient = containerClient.getBlockBlobClient(req.file.originalname);
  const fileName = req.file.originalname;
  await blobClient.uploadData(req.file.buffer, {
    blobHTTPHeaders: { blobContentType: req.file.mimetype }
  });

  res.json({
    message: "Uploaded",
    url: `${process.env.APP_HOST}${containerName}/${fileName}`
  });
});


