import axios from "axios";

export default class SWRequest {
    static fetchAll() {
        return axios.get('/filmes')
    }

    static setAsFavorite(ep) {
        return axios.post('/filmes', ep)
    }
}