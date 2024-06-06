import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback', callback);
}
export function create(texto, ativo_feedback, callback){
    connection.query('INSERT INTO feedback (texto, ativo_feedback) VALUES (?, 1)', [texto, ativo_feedback], callback);
}
export function update(texto, id, callback) {
    connection.query("UPDATE feedback SET texto = ?, ativo_feedback = 1 WHERE idfeedback = ?", [texto, id], callback);
}
export function deleteFeed(id, callback) {
    connection.query('DELETE from feedback where idfeedback = ?', [id], callback);
}