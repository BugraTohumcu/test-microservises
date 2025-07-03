import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './config/logger';
import { param, validationResult } from 'express-validator';
import { userErrorHandler } from './handler/user.error.handler';
import { UserValidationError } from './exception/user.validation.exception';
import { validateUser } from './middleware/user.validation';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/',(req: Request,res: Response) => {
    logger.info('Users fetched');
    res.json({message: 'User Service'});
});

app.get('/:name/:age',validateUser,(req:Request, res:Response) => {
    const { name, age } = req.params;
    logger.info(`New user ${name} is ${age} years old`);
    res.status(201).json({ message: 'User created' });
});

app.use(userErrorHandler);



app.listen(PORT , () => {
    console.log(`The user-server is running at http://localhost:${PORT}`);
    
});