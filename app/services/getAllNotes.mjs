
export async function getAllNotes(_userId) {
}

export function createUser(db, { email, firstname, lastname, password }) {
    return new Promise(async (resolve, reject) => {
        const pass = await hash(password, 10)
        const stmt = db.prepare('INSERT INTO users(email, firstname, lastname, password) VALUES (?,?,?,?)')
        stmt.run([ email, firstname, lastname, pass ], (err, data) => {
            const p = err ? err : data;
            (err ? reject : resolve)(p)
        })
    })
}