import { create, read, update, deleteFeed } from '../model/feedModel.js';

export async function createFeed(req, res){
    const { texto } = req.body;
    console.log('Dados recebidos do frontend:', { texto });

    create(texto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feedback criado com sucesso' });
    });
}

export async function getAllFeed(req, res) {
    read((err, feeds) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feeds);
    });
}

export async function updateFeed(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { texto } = req.body;
    update(texto, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteFeed(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}