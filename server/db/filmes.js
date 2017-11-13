const Db = require("./index");

const getFilmById = filmeId => {
    return new Promise((resolve, reject) => {
        Db.get(`SELECT * FROM Filmes WHERE filmeId = ?`, [filmeId], (err, row) => {
            if (err) {
                reject(err.message);
            }
            resolve(row);
        });
    });
};

const insertFilm = (filmeId, favorito) => {
    return new Promise((resolve, reject) => {
        Db.run(`INSERT INTO Filmes(filmeId, favorito) VALUES(?,?)`, [filmeId, favorito],
            err => {
                if (err) {
                    reject(err.message);
                }
                resolve();
            });
    })
};

const updateFilm = (filmeId, favorito) => {
    return new Promise((resolve, reject) => {
        let data = [favorito, filmeId];
        let sql = `UPDATE Filmes SET favorito = ? WHERE filmeId = ?`;
        Db.run(sql, data, (err) => {
            if (err) return reject(err);
            getFilmById(filmeId)
                .then(resolve)
                .catch(reject)
        });
    });
};

const updateFilmsFavorite = (filmeId, favorito) => {
    return new Promise((resolve, reject) => {
        getFilmById(filmeId)
            .then(film => {
                return film ? updateFilm(filmeId, favorito) : insertFilm(filmeId, favorito);
            })
            .then(resolve)
            .catch(reject)
    });
};

const getAll = () => {
    return new Promise((resolve, reject) => {
        Db.run(`SELECT * FROM Filmes`, null,
            err => {
                if (err) {
                    reject(err.message);
                }
                resolve();
            });
    })
};

module.exports = {
    getFilmById,
    insertFilm,
    updateFilm,
    updateFilmsFavorite
};