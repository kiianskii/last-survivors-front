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
      const { data } = await projectApi.patch(`/api/cards/${_id}`, cardsData);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  "cards/delete-card",
  async ({ id }, thunkApi) => {
    console.log(id);
    try {
      const { data } = await projectApi.delete(`/api/cards/${id}`);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
