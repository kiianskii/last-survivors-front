import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardsApi } from "../../config/boardsApi";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQ0ZDdjZWEyNWU2YzY5MDAwYjk1MSIsImlhdCI6MTcyMDU1OTgxMywiZXhwIjoxNzIwNjQyNjEzfQ.y1S_ZCkWAfGWLwR6Kq8PKiNwY-zZOBcT39QoLjyu0zM";

boardsApi.defaults.headers.common.Authorization = `Bearer ${token}`;

export const fetchBoards = createAsyncThunk(
  "boards/get-boards",
  async (_, thunkApi) => {
    try {
      const { data } = await boardsApi.get("/api/board");
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
      const { data } = await boardsApi.post("/api/board", boardsData);
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
      const { data } = await boardsApi.put(`/api/board/${_id}`, boardsData);
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
      await boardsApi.delete(`/api/board/${_id}`);
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
