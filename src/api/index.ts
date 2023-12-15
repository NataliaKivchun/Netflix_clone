import axios from "axios";

export const API_KEY = "api_key=14fd4993a9aad63c9047cbac216ee8d1";
export const IMAGES_URL = "https://image.tmdb.org/t/p/original";

class Api {
    private readonly BASE_URL = "https://api.themoviedb.org/3";
    protected api
    constructor () {
        this.api = axios.create({
            baseURL: this.BASE_URL,
        })
    }
}

export default Api