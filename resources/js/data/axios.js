import axios from 'axios';

export default axios.create({
    baseURL: "http://homestead.rowing",
    headers: {"Accept": "application/json"},
    withCredentials: true
});