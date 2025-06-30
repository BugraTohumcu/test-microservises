import express from 'express';
import { Request , Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/',(req: Request,res: Response) => {
    res.json({message: 'Product Service'});
});


app.listen(PORT , () => {
    console.log(`The user-server is running at http://localhost:${PORT}`);
    
});