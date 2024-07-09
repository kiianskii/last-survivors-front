import axios from "axios";

export const cardsApi = axios.create({
  baseURL: "https://last-survivors-back.onrender.com",
});
