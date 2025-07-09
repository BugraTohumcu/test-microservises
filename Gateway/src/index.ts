import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', createProxyMiddleware({
    target: 'http://localhost:8001/users',
    changeOrigin: true
}));

app.use('/products', createProxyMiddleware({
  target: 'http://localhost:8002/products',
  changeOrigin: true,
}));

app.listen(PORT , () => {
    console.log(`The user-server is running at http://localhost:${PORT}`);
    
});