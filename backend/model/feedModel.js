import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback1', callback);
}
export function create(nome, texto, callback){
    connection.query('INSERT INTO feedback1 (nome, texto) VALUES (?, ?)', [nome,texto], callback);
}
export function update(nome, texto, id, callback) {
    connection.query("UPDATE feedback1 SET nome = ?, texto = ?  WHERE idfeedback = ?", [nome, texto, id], callback);
}
export function deleteF(id, callback) {
    connection.query('DELETE from feedback1 where idfeedback = ?', [id], callback);
}