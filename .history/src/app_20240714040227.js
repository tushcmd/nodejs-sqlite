import Database from 'better-sqlite3';

const db = new Database('app.db');

// const query = `
//     CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name STRING NOT NULL,
//         username STRING NOT NULL UNIQUE
//     );
// `;


// exec is used for create table statements

// db.exec(query);

// const data = [
//     {name: 'tushdev', username: 'tushdev'},
//     {name: 'tushdev1', username: 'tushdev1'},
//     {name: 'tushdev2', username: 'tushdev2'}
// ];

// const insertData = db.prepare('INSERT INTO users (name, username) VALUES (?, ?)');


// run is used when you dont really expect a return result - you dont
// need the data given back - done for inserts

// data.forEach((user) => {
//     insertData.run(user.name, user.username);
// });


// const query = `SELECT * FROM users`;
// const users = db.prepare(query).all();

// // console.table(users);
// console.log(users);


// prepare is used to prevent sql injection

// const user = db.prepare('SELECT * FROM users WHERE id = ?').get(1);
// console.log(user);

// db.close();

import express from ('express');

const app = express()
const port = 3000

app.get('/', function (req, res) {
    const query = `SELECT * FROM users`;
    const users = db.prepare(query).all();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})