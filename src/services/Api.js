import axios from 'axios';

export default() => axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
