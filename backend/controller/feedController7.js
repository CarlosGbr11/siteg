import { create, read, update, deleteF7 } from '../model/feedModel7.js';

export async function createFeed7(req, res){
    const { nome7, texto7 } = req.body;
    console.log('Dados recebidos do frontend:', { nome7, texto7 });

    create( nome7, texto7, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed7(req, res) {
    read((err, feed7) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed7);
    });
}

export async function updateFeed7(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome7, texto7 } = req.body;
    update(nome7, texto7, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed7(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF7(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}