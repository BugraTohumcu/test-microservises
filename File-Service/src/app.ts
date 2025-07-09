import express from "express";
import dotenv from "dotenv";
import { router } from './route';
import { logger } from "./config/logger";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/',router);

app.listen(PORT, () => {
  logger.info(`Server started on http://localhost:${PORT}`);
});
