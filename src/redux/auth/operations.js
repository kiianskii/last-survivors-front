import { createAsyncThunk } from "@reduxjs/toolkit";

import { clearToken, setToken, projectApi } from "../../config/projectAPI";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.post("/api/auth/register", credentials);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.post("/api/auth/login", credentials);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await projectApi.post("/api/auth/logout");
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    setToken(savedToken);

    try {
      const { data } = await projectApi.get("/api/auth/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const themeThunk = createAsyncThunk(
  "auth/change-theme",
  async ({ id, credentials }, thunkApi) => {
    try {
      const { data } = await projectApi.patch(`/api/user/${id}`, credentials);
      return data.theme;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "user/edit",
  async ({ id, credentials }, thunkApi) => {
    try {
      const { data } = await projectApi.patch(`/api/user/${id}`, credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
