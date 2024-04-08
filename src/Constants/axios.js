
import axios from 'axios'
import { BaseUrl }  from './Constants';
const instance = axios.create({
    baseURL:BaseUrl,
  });
  export default instance;