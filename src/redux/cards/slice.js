import { createSlice } from "@reduxjs/toolkit";

import {
  getCardsThunk,
  addCardThunk,
  editCardThunk,
  deleteCardThunk,
} from "./operations";

const initialState = {
  cards: [],
  error: null,
};

const slice = createSlice({
  name: "cards",
  initialState,
  selectors: {
    cardsSelector: (state) => state.cards,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCardThunk.fulfilled, (state, { payload }) => {
        state.cards.push(payload);
      })
      .addCase(addCardThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getCardsThunk.fulfilled, (state, { payload }) => {
        state.cards = payload;
      })
      .addCase(getCardsThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteCardThunk.fulfilled, (state, { payload }) => {
        state.cards = state.cards.filter((card) => card._id !== payload);
      })
      .addCase(deleteCardThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editCardThunk.fulfilled, (state, { payload }) => {
        const index = state.cards.findIndex((card) => card._id === payload._id);
        if (index !== -1) {
          state.cards[index] = payload;
        } else {
          state.cards.push(payload);
        }
      })
      .addCase(editCardThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const cardsReducer = slice.reducer;
export const { cardsSelector } = slice.selectors;
