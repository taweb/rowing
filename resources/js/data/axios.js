import axios from 'axios';

export default axios.create({
    baseURL: "http://homestead.test",
    headers: {"Accept": "application/json"},
    withCredentials: true
});