import { create, read, update, deleteF8 } from '../model/feedModel8.js';

export async function createFeed8(req, res){
    const { nome8, texto8 } = req.body;
    console.log('Dados recebidos do frontend:', { nome8, texto8 });

    create( nome8, texto8, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed8(req, res) {
    read((err, feed8) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed8);
    });
}

export async function updateFeed8(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome8, texto8 } = req.body;
    update(nome8, texto8, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed8(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF8(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}