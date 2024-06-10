import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback4', callback);
}
export function create(nome4, texto4, callback){
    connection.query('INSERT INTO feedback4 (nome4, texto4) VALUES (?, ?)', [nome4,texto4], callback);
}
export function update(nome4, texto4, id, callback) {
    connection.query("UPDATE feedback4 SET nome4 = ?, texto4 = ? WHERE idfeedback4 = ?", [nome4, texto4, id], callback);
}
export function deleteF4(id, callback) {
    connection.query('DELETE from feedback4 where idfeedback4 = ?', [id], callback);
}