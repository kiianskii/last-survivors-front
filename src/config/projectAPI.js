import axios from "axios";

export const projectApi = axios.create({
  baseURL: "http://localhost:3000/",
});

export const setToken = (token) => {
  projectApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  projectApi.defaults.headers.common.Authorization = ``;
};
