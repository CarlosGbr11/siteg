import express from 'express';
const app = express();
import cors from 'cors';
import { getAllFeed, createFeed, updateFeed, deleteFeed } from "./controller/feedController.js";
import { getAllFeed2, createFeed2, updateFeed2, deleteFeed2 } from "./controller/feedController2.js";
import { getAllFeed3, createFeed3, updateFeed3, deleteFeed3 } from "./controller/feedController3.js";


app.use(express.json());
app.use(cors());

app.get('/feed', getAllFeed);
app.post('/feed', createFeed);
app.put('/feed/:id', updateFeed);
app.delete('/feed/:id', deleteFeed);

app.get('/feed2', getAllFeed2);
app.post('/feed2', createFeed2);
app.put('/feed2/:id', updateFeed2);
app.delete('/feed2/:id', deleteFeed2);

app.get('/feed3', getAllFeed3);
app.post('/feed3', createFeed3);
app.put('/feed3/:id', updateFeed3);
app.delete('/feed3/:id', deleteFeed3);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});