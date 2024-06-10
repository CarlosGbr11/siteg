import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback6', callback);
}
export function create(nome6, texto6, callback){
    connection.query('INSERT INTO feedback6 (nome6, texto6) VALUES (?, ?)', [nome6,texto6], callback);
}
export function update(nome6, texto6, id, callback) {
    connection.query("UPDATE feedback6 SET nome6 = ?, texto6 = ? WHERE idfeedback6 = ?", [nome6, texto6, id], callback);
}
export function deleteF6(id, callback) {
    connection.query('DELETE from feedback6 where idfeedback6 = ?', [id], callback);
}