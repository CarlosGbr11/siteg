import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback', callback);
}
export function create(nome, texto, callback){
    connection.query('INSERT INTO feedback (nome, texto) VALUES (?, ?)', [nome,texto], callback);
}
export function update(nome, texto, id, callback) {
    connection.query("UPDATE feedback SET nome = ?, texto = ?, ativo_feedback = 1 WHERE idfeedback = ?", [nome, texto, id], callback);
}
export function deleteF(id, callback) {
    connection.query('DELETE from feedback where idfeedback = ?', [id], callback);
}