import axios from 'axios';
import config from '../config';

export function getRoomList() {
  return axios.get(`${config.url}/rooms`).catch(err => console.log(err));
}
