import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', (req, res, next) => {
    console.log("Proxy is directing");
    next();
});

app.use('/user', proxy('http://localhost:8001'));

app.use('/product', proxy('http://localhost:8002'));

app.listen(PORT, () => {
    console.log(`The user-server is running at http://localhost:${PORT}`);
});