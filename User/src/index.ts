import express from 'express';
import { Request , Response } from 'express';


const app = express();

app.use(express.json());

app.get('/user',(req: Request,res: Response) => {
    res.send('User Service');
});