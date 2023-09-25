import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:5263/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default { http }
