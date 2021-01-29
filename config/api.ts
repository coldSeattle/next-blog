import axios from 'axios';

export const root = axios.create({
    baseURL: 'https://simple-blog-api.crew.red',
});
