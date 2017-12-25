import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-project-1470639932383.firebaseio.com/'
});

export default instance;
