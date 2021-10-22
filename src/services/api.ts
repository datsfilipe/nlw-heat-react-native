import axios from 'axios'

const YOUR_IP_HERE = ''

export const api = axios.create({
  baseURL: `http://${YOUR_IP_HERE}:4000`
})