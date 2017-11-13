const Express = require("express");
const settings = require("./settings");
const swMirror = new Express();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
swMirror.use("/public",Express.static(path.join(__dirname,"..","public")));

swMirror.get('/', async(req, res) =>{
    res.status(200).header('content-type', 'text/html').send(
        fs.readFileSync(path.join(__dirname,"../public/index.html"))
    );
});

swMirror.get('/filmes', async(req, res) =>{
    try{
        const result = await axios.get(settings.films);
        res.status(200).send(result.data);
    } catch(e) {
        res.status(500).send(e.message)
    }
});

swMirror.listen(settings.port, settings.host, ()=>
console.log("SW MIRROR LISTEN ON "+settings.host+":" + settings.port));