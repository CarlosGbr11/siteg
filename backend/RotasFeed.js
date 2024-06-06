import express from 'express';
const app = express();
import cors from 'cors';
import { getAllFeed, createFeed, updateFeed, deleteFeed } from "./controller/feedController.js";


app.use(express.json());
app.use(cors());

app.get('/feeds', getAllFeed);
app.post('/feeds', createFeed);
app.put('/feeds/:id', updateFeed);
app.delete('/feeds/:id', deleteFeed);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});