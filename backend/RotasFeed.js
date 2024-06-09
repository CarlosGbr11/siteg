import express from 'express';
const app = express();
import cors from 'cors';
import { getAllFeed, createFeed, updateFeed, deleteFeed } from "./controller/feedController.js";


app.use(express.json());
app.use(cors());

app.get('/feed', getAllFeed);
app.post('/feed', createFeed);
app.put('/feed/:id', updateFeed);
app.delete('/feed/:id', deleteFeed);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});