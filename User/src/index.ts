import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './config/logger';
import { userErrorHandler } from './handler/user.error.handler';
import { router } from './user.route';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/',router);
app.use(userErrorHandler);



app.listen(PORT , () => {
    logger.info(`The user-server is running at http://localhost:${PORT}`);
    
});