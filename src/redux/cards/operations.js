import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectApi } from "../../config/projectAPI";

export const getCardsThunk = createAsyncThunk(
  "cards/get-cards",
  async (_, thunkApi) => {
    try {
      const { data } = await projectApi.get("/api/cards");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCardThunk = createAsyncThunk(
  "cards/add-card",
  async (cardsData, thunkApi) => {
    try {
      const { data } = await projectApi.post("/api/cards", cardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editCardThunk = createAsyncThunk(
  "cards/edit-card",
  async ({ _id, cardsData }, thunkApi) => {
    try {
      const { data } = await projectApi.put(`/api/cards/${_id}`, cardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  "cards/delete-card",
  async (payload, thunkApi) => {
    const { _id, column_id, board_id } = payload;
    const filter = { column_id, board_id };
    try {
      await projectApi.delete(`/api/cards/${_id}`, filter);
      return _id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
