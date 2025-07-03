import express from 'express';
import dotenv from 'dotenv';
import { router } from './route';
import { errorHandler } from './middleware/product.error.handler';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/products',router);

app.use(errorHandler)

app.listen(PORT , () => {
    console.log(`The product-server is running at http://localhost:${PORT}`);
});