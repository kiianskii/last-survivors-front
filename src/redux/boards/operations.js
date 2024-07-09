import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardsApi } from "../../config/boardsApi";

export const fetchBoards = createAsyncThunk(
  "boards/get-boards",
  async (_, thunkApi) => {
    try {
      const { data } = await boardsApi.get("/api/boards");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  "boards/add-board",
  async (boardsData, thunkApi) => {
    try {
      const { data } = await boardsApi.post("/api/boards", boardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  "boards/edit-board",
  async ({ _id, boardsData }, thunkApi) => {
    try {
      const { data } = await boardsApi.put(`/api/boards/${_id}`, boardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/delete-board",
  async (_id, thunkApi) => {
    try {
      await boardsApi.delete(`/api/boards/${_id}`);
      return _id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendHelpRequest = createAsyncThunk(
  "help/sendHelpRequest",
  async (formData, thunkApi) => {
    try {
      await boardsApi.post("/api/help", formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
