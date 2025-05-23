import productRouter from './routes/productRoute';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express()
app.use(express.json());
const port = 3000;
app.use(cors());

app.get('/', (_req, res) => {
    res.send('Hello, Node.js!');
});

app.use('/products', productRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: err.message });
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
