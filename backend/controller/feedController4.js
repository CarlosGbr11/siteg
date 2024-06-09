import { create, read, update, deleteF4 } from '../model/feedModel4.js';

export async function createFeed4(req, res){
    const { nome4, texto4 } = req.body;
    console.log('Dados recebidos do frontend:', { nome4, texto4 });

    create( nome4, texto4, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed4(req, res) {
    read((err, feed4) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed4);
    });
}

export async function updateFeed4(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome4, texto4 } = req.body;
    update(nome4, texto4, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed4(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF4(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}