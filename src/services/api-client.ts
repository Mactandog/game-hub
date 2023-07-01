import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '028c848b18c445898a2698137b329b2c'
    }
});