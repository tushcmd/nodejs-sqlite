import Database from 'better-sqlite3';

const db = new Database('app.db');

// const query = `
//     CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name STRING NOT NULL,
//         username STRING NOT NULL UNIQUE
//     );
// `;

// db.exec(query);

// const data = [
//     {name: 'tushdev', username: 'tushdev'},
//     {name: 'tushdev1', username: 'tushdev1'},
//     {name: 'tushdev2', username: 'tushdev2'}
// ];

// const insertData = db.prepare('INSERT INTO users (name, username) VALUES (?, ?)');

// data.forEach((user) => {
//     insertData.run(user.name, user.username);
// });


const query = `SELECT * FROM users`;
const users = db.prepare(query).all();

console.table(users);

db.close();