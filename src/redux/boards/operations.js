import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectApi } from "../../config/projectAPI";

export const fetchBoards = createAsyncThunk(
  "boards/get-boards",
  async (_, thunkApi) => {
    try {
      const { data } = await projectApi.get("/api/board");
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
      const { data } = await projectApi.post("/api/board", boardsData);
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
      const { data } = await projectApi.patch(`/api/board/${_id}`, boardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/delete-board",
  async ({ _id }, thunkApi) => {
    try {
      await projectApi.delete(`/api/board/${_id}`);
      return _id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
