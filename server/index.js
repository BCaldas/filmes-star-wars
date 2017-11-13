const Express = require("express");
const settings = require("./settings");
const swMirror = new Express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const filmes = require("./db/filmes");

swMirror.use("/public",Express.static(path.join(__dirname,"..","public")));
swMirror.use(bodyParser.urlencoded({extended:false}));
swMirror.use(bodyParser.json());

swMirror.get('/', async(req, res) =>{
    res.status(200).header('content-type', 'text/html').send(
        fs.readFileSync(path.join(__dirname,"../public/index.html"))
    );
});

swMirror.get('/filmes', async(req, res) =>{
    try{
        const result = await axios.get(settings.films);
        let data = result.data;
        data = await Promise.all(data.results.map(async ep => {
            let film = await filmes.getFilmById(ep.episode_id);
            film = film || {favorito: 0};
            return Promise.resolve(Object.assign({}, ep, {favorito: film.favorito === 1}));
        }));
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
});

swMirror.post('/filmes', async(req, res) => {
    try {
        const data = req.body;
        const filme = await filmes.updateFilmsFavorite(data.filmeId,data.favorito);
        res.send(filme);
    } catch (e) {
        res.status(500).send({
            message: e.message
        })
    }
});

swMirror.listen(settings.port, settings.host, ()=>
    console.log("SW MIRROR LISTEN ON "+settings.host+":" + settings.port));