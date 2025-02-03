import axios from 'axios';

export const appMoviesApi = axios.create({
    baseURL: 'http://localhost:3002/api/',
});