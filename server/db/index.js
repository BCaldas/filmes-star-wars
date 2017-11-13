const path = require("path");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, 'favoritos.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the Favoritos database.');
});

db.run(`CREATE TABLE IF NOT EXISTS Filmes( filmeId Number, favorito Number )`);


module.exports = db;