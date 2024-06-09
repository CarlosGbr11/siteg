import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback', callback);
}
export function create(texto, callback){
    connection.query('INSERT INTO feedback (texto) VALUES (?)', [texto], callback);
}
export function update(texto, id, callback) {
    connection.query("UPDATE feedback SET texto = ?, ativo_feedback = 1 WHERE idfeedback = ?", [texto, id], callback);
}
export function deleteF(id, callback) {
    connection.query('DELETE from feedback where idfeedback = ?', [id], callback);
}