import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'0d229df0558748e7acb4d10a28991fc2'
    }
});