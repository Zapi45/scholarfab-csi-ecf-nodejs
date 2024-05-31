import db from '../controllers/db.mjs';




export function createNote({ title, content, owner_id }) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO notes(title,content,owner_id) VALUES (?,?,?)');
        stmt.run([title, content, owner_id], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
