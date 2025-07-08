import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './config/logger';
import { userErrorHandler } from './handler/user.error.handler';
import { validateUser } from './middleware/user.validation';
import { PrismaClient } from '@prisma/client';
import { create } from 'ts-node';
import { textSpanContainsPosition } from 'typescript';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/',(req: Request,res: Response) => {
    logger.info('Users fetched');
    res.json({message: 'User Service'});
});

app.get('/:name/:age',validateUser, async (req:Request, res:Response) => {
    const name:string = req.params.name;
    const age :number = +req.params.age;
    logger.info(`New user ${name} is ${age} years old`);
    const user = await prisma.user.create({
        data:{
            name:name,
            age:age,
            test: {
                create: [ {t_name:'bomba'}]
            }
        }
    
      });
    res.status(201).json({ result: user });
});

app.use(userErrorHandler);



app.listen(PORT , () => {
    console.log(`The user-server is running at http://localhost:${PORT}`);
    
});