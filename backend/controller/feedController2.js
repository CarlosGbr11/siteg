import { create, read, update, deleteF2 } from '../model/feedModel2.js';

export async function createFeed2(req, res){
    const { nome2, texto2 } = req.body;
    console.log('Dados recebidos do frontend:', { nome2, texto2 });

    create( nome2, texto2, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed2(req, res) {
    read((err, feed2) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed2);
    });
}

export async function updateFeed2(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome2, texto2 } = req.body;
    update(nome2, texto2, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed2(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF2(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}