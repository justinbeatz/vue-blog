import axios from 'axios';

export default() => axios.create({
  baseURL: 'http://kationdev.com/dev/vue-blog/api/v1',
  withCredentials: false,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
