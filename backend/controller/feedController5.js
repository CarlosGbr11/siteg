import { create, read, update, deleteF5 } from '../model/feedModel5.js';

export async function createFeed5(req, res){
    const { nome5, texto5 } = req.body;
    console.log('Dados recebidos do frontend:', { nome5, texto5 });

    create( nome5, texto5, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Feed criado com sucesso' });
    });
}

export async function getAllFeed5(req, res) {
    read((err, feed5) => {
        if (err) {
            read.status(500).json({ error: err.message });
            return;
        }
        res.json(feed5);
    });
}

export async function updateFeed5(req, res) {
    const { id } = req.params;
    console.log('Dados recebidops do  frontend:', {id});
    const { nome5, texto5 } = req.body;
    update(nome5, texto5, id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed atualizado com sucesso');
    });
}

export async function deleteFeed5(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deleteF5(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Feed excluido com sucesso');
    });
}