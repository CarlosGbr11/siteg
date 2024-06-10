import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback9', callback);
}
export function create(nome9, texto9, callback){
    connection.query('INSERT INTO feedback9 (nome9, texto9) VALUES (?, ?)', [nome9,texto9], callback);
}
export function update(nome9, texto9, id, callback) {
    connection.query("UPDATE feedback9 SET nome9 = ?, texto9 = ? WHERE idfeedback9 = ?", [nome9, texto9, id], callback);
}
export function deleteF9(id, callback) {
    connection.query('DELETE from feedback9 where idfeedback9 = ?', [id], callback);
}