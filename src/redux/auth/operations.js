import { createAsyncThunk } from "@reduxjs/toolkit";

import { clearToken, setToken, projectApi } from "../../config/projectAPI";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.post("/api/auth/register", credentials);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return thunkApi.rejectWithValue("User with this email already exists.");
      }
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

export const editAvatarThunk = createAsyncThunk(
  "user/editAvatar",
  async (formData, thunkApi) => {
    try {
      const { data } = await projectApi.patch("/api/avatar/", formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const needHelpThunk = createAsyncThunk(
  "user/help",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.post(`/api/auth/help`, credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
