import { Router } from "express";
import multer from 'multer';
import { Request, Response } from "express";
const router = Router();
const upload = multer();
import dotenv from 'dotenv'
import { BlobClient } from "../config/blobClient";
import { UploadFile } from "../dto/file.dto/upload.file";
dotenv.config();

const blobServiceClient = BlobClient.getInstance();
const containerName = 'test-container';

router.post("/upload", upload.single("file"), async (req: Request, res: Response) => {

  const file:UploadFile = req.body;

  
});


