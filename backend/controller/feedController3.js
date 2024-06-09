import { create, read, update, deleteF3 } from '../model/feedModel3.js';

export async function createFeed3(req, res){
    const { nome3, texto3 } = req.body;
    console.log('Dados recebidos do frontend:', { nome3, texto3 });

    create( nome3, texto3, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed3(req, res) {
    read((err, feed3) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed3);
    });
}

export async function updateFeed3(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome3, texto3 } = req.body;
    update(nome3, texto3, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed3(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF3(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}