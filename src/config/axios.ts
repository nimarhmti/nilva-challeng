import axios from "axios";

const BASE_URL = "https://core-sport-api.zarebin.ir";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
