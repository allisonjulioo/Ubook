import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8080/api';

const client: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

export { client };
