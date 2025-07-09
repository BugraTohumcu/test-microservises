import express from "express";
import dotenv from "dotenv";
import { uploadRouter } from "./upload.controller";
import { logger } from "./config/logger";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(uploadRouter);

app.listen(PORT, () => {
  logger.info(`Server started on http://localhost:${PORT}`);
});
