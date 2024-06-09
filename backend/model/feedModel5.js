import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback5', callback);
}
export function create(nome5, texto5, callback){
    connection.query('INSERT INTO feedback5 (nome5, texto5) VALUES (?, ?)', [nome5,texto5], callback);
}
export function update(nome5, texto5, id, callback) {
    connection.query("UPDATE feedback55 SET nome5 = ?, texto5 = ?, ativo_feedback = 1 WHERE idfeedback = ?", [nome5, texto5, id], callback);
}
export function deleteF5(id, callback) {
    connection.query('DELETE from feedback5 where idfeedback = ?', [id], callback);
}