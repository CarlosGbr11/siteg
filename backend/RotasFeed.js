import express from 'express';
const app = express();
import cors from 'cors';
import { getAllFeed, createFeed, updateFeed, deleteFeed } from "./controller/feedController.js";
import { getAllFeed2, createFeed2, updateFeed2, deleteFeed2 } from "./controller/feedController2.js";
import { getAllFeed3, createFeed3, updateFeed3, deleteFeed3 } from "./controller/feedController3.js";
import { getAllFeed4, createFeed4, updateFeed4, deleteFeed4 } from "./controller/feedController4.js";
import { getAllFeed5, createFeed5, updateFeed5, deleteFeed5 } from "./controller/feedController5.js";
import { getAllFeed6, createFeed6, updateFeed6, deleteFeed6 } from "./controller/feedController6.js";
import { getAllFeed7, createFeed7, updateFeed7, deleteFeed7 } from "./controller/feedController7.js";
import { getAllFeed8, createFeed8, updateFeed8, deleteFeed8 } from "./controller/feedController8.js";
import { getAllFeed9, createFeed9, updateFeed9, deleteFeed9 } from "./controller/feedController9.js";


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

app.get('/feed4', getAllFeed4);
app.post('/feed4', createFeed4);
app.put('/feed4/:id', updateFeed4);
app.delete('/feed4/:id', deleteFeed4);

app.get('/feed5', getAllFeed5);
app.post('/feed5', createFeed5);
app.put('/feed5/:id', updateFeed5);
app.delete('/feed5/:id', deleteFeed5);

app.get('/feed6', getAllFeed6);
app.post('/feed6', createFeed6);
app.put('/feed6/:id', updateFeed6);
app.delete('/feed6/:id', deleteFeed6);

app.get('/feed7', getAllFeed7);
app.post('/feed7', createFeed7);
app.put('/feed7/:id', updateFeed7);
app.delete('/feed7/:id', deleteFeed7);

app.get('/feed8', getAllFeed8);
app.post('/feed8', createFeed8);
app.put('/feed8/:id', updateFeed8);
app.delete('/feed8/:id', deleteFeed8);

app.get('/feed9', getAllFeed9);
app.post('/feed9', createFeed9);
app.put('/feed9/:id', updateFeed9);
app.delete('/feed9/:id', deleteFeed9);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});