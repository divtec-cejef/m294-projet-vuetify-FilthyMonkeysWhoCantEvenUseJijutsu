import axios from 'axios'
const API_KEY = import.meta.env.VITE_GIANTBOMB_API_KEY

const baseURL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
  baseURL,
  params: {
    api_key: API_KEY,
    format: 'json',
  },
})
