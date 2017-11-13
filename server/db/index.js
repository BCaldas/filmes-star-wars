const path = require("path");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, 'favoritos.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the Favorites database.');
});

db.run(`CREATE TABLE IF NOT EXISTS Filmes( FilmeId Number, Favorito Number )`);


module.exports = db;