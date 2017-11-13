const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('./db/favoritos.db', sqlite.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the favoritos database.');
});

db.run('CREATE TABLE IF NOT EXISTS Favoritos(episode_id INTEGER, favorito INTEGER)');