import { Router } from "express";
import { folderRouter } from "./routes/folder.route";
import { folderErrorHandler } from "./middleware/folder.middleware/folder.error.handler";

export const router = Router();

router.use('/folder',folderRouter);
router.use(folderErrorHandler)