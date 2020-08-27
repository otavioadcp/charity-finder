import axios from "axios";

const BASE_URL = "https://api.globalgiving.org/";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
