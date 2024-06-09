import { create, read, update, deleteF9 } from '../model/feedModel9.js';

export async function createFeed9(req, res){
    const { nome9, texto9 } = req.body;
    console.log('Dados recebidos do frontend:', { nome9, texto9 });

    create( nome9, texto9, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed9(req, res) {
    read((err, feed9) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed9);
    });
}

export async function updateFeed9(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome9, texto9 } = req.body;
    update(nome9, texto9, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed9(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF9(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}