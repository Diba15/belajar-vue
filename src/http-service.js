import axios from 'axios'

const httpService = axios.create({
  baseURL: 'https://port-api-liard.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default httpService
