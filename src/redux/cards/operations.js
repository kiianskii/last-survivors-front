import { createAsyncThunk } from "@reduxjs/toolkit";
import { cardsApi } from "../../../config/cardsApi";

export const getCardsThunk = createAsyncThunk(
  "cards/get-cards",
  async (_, thunkApi) => {
    try {
      const { data } = await cardsApi.get("/api/cards");
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
      const { data } = await cardsApi.post("/api/cards", cardsData);
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
      const { data } = await cardsApi.put(`/api/cards/${_id}`, cardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  "cards/delete-card",
  async (_id, thunkApi) => {
    try {
      await cardsApi.delete(`/api/cards/${_id}`);
      return _id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
