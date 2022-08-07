import axios from 'axios';

const request = axios.create({
    baseURL: 'https://simple-contact-crud.herokuapp.com',
    timeout: 10000,
    headers: { "X-Custom-Header": "foobar" }
});

export default request;