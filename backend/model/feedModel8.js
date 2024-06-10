import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback8', callback);
}
export function create(nome8, texto8, callback){
    connection.query('INSERT INTO feedback8 (nome8, texto8) VALUES (?, ?)', [nome8,texto8], callback);
}
export function update(nome8, texto8, id, callback) {
    connection.query("UPDATE feedback8 SET nome8 = ?, texto8 = ? WHERE idfeedback8 = ?", [nome8, texto8, id], callback);
}
export function deleteF8(id, callback) {
    connection.query('DELETE from feedback8 where idfeedback8 = ?', [id], callback);
}