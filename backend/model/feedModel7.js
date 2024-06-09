import connection from '../config/Conecta.js';

export function read(callback){
    connection.query('SELECT * from feedback7', callback);
}
export function create(nome7, texto7, callback){
    connection.query('INSERT INTO feedback7 (nome7, texto7) VALUES (?, ?)', [nome7,texto7], callback);
}
export function update(nome7, texto7, id, callback) {
    connection.query("UPDATE feedback7 SET nome7 = ?, texto7 = ?, ativo_feedback = 1 WHERE idfeedback = ?", [nome7, texto7, id], callback);
}
export function deleteF7(id, callback) {
    connection.query('DELETE from feedback7 where idfeedback = ?', [id], callback);
}