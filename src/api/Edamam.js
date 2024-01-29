import axios from "axios";
const baseURL = 'https://api.edamam.com/api/recipes/v2'
export default axios.create({
    baseURL: 'baseURL',
    params: {
        app_id: "2920c583",
        app_key: "188eeca47a29426249500ebf4a641a06",
    },
    });