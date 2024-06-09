import { create, read, update, deleteF } from '../model/feedModel.js';

export async function createFeed(req, res){
    const { nome, texto } = req.body;
    console.log('Dados recebidos do frontend:', { nome, texto });

    create( nome, texto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed(req, res) {
    read((err, feed) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed);
    });
}

export async function updateFeed(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome, texto } = req.body;
    update(nome, texto, id, (err, result) => {
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
    deleteF(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}