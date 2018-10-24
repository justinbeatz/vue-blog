import axios from 'axios';
import store from '@/store';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const apiConfig = config;
    const token = store.getters['account/getToken'];
    if (token) {
      apiConfig.headers.Authorization = `Bearer ${token}`;
    }
    return apiConfig;
  },
  error => Promise.reject(error),
);

export default http;
