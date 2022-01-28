import axios from 'axios';

const apiHortiFruti = axios.create({
  baseURL: 'https://www.fruityvice.com/api/fruit',
});

export default apiHortiFruti;
