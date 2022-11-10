import axios, { AxiosInstance } from 'axios';

const url = 'http://localhost:8080/api';

const client: AxiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
});

export { client, url };
