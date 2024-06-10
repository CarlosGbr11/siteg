import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback2', callback);
}
export function create(nome2, texto2, callback){
    connection.query('INSERT INTO feedback2 (nome2, texto2) VALUES (?, ?)', [nome2,texto2], callback);
}
export function update(nome2, texto2, id, callback) {
    connection.query("UPDATE feedback2 SET nome2 = ?, texto2 = ? WHERE idfeedback2 = ?", [nome2, texto2, id], callback);
}
export function deleteF2(id, callback) {
    connection.query('DELETE from feedback2 where idfeedback2 = ?', [id], callback);
}