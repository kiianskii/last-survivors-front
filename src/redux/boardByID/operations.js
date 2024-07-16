import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectApi } from "../../config/projectAPI";

export const fetchColumnsThunk = createAsyncThunk(
  "columns/get-columnsByBoard",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.get(`/api/columns/${credentials}`);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addColumnThunk = createAsyncThunk(
  "columns/create-column",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.post("/api/columns", credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteColumnThunk = createAsyncThunk(
  "columns/delete-column",
  async (credentials, thunkApi) => {
    try {
      const { data } = await projectApi.delete(
        `/api/columns/${credentials.id}`,
        { board_id: credentials.board_id }
      );
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
