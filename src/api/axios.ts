import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});