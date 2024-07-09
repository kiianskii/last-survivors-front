import axios from "axios";

export const projectApi = axios.create({
  baseURL: "https://last-survivors-back.onrender.com",
});

export const setToken = (token) => {
  projectApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  projectApi.defaults.headers.common.Authorization = ``;
};
