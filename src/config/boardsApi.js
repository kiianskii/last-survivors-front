import axios from "axios";

export const boardsApi = axios.create({
  baseURL: "https://last-survivors-back.onrender.com",
});
