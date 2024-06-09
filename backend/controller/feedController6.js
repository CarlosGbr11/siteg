import { create, read, update, deleteF6 } from '../model/feedModel6.js';

export async function createFeed6(req, res){
    const { nome6, texto6 } = req.body;
    console.log('Dados recebidos do frontend:', { nome6, texto6 });

    create( nome6, texto6, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed6(req, res) {
    read((err, feed6) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed6);
    });
}

export async function updateFeed6(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome6, texto6 } = req.body;
    update(nome6, texto6, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed6(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF6(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}