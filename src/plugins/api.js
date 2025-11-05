import axios from 'axios'

const API_KEY = import.meta.env.VITE_GIANTBOMB_API_KEY

const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL, // normal online API (through proxy)
  timeout: 10_000,
  params: {
    api_key: API_KEY,
    format: 'json',
  },
})

export default api
