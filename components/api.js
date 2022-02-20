import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY},
});
