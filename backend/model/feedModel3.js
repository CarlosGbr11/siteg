import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback3', callback);
}
export function create(nome3, texto3, callback){
    connection.query('INSERT INTO feedback3 (nome3, texto3) VALUES (?, ?)', [nome3,texto3], callback);
}
export function update(nome3, texto3, id, callback) {
    connection.query("UPDATE feedback3 SET nome3 = ?, texto3 = ?, ativo_feedback = 1 WHERE idfeedback = ?", [nome3, texto3, id], callback);
}
export function deleteF3(id, callback) {
    connection.query('DELETE from feedback3 where idfeedback = ?', [id], callback);
}