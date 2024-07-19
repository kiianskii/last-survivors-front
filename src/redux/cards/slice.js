import { createSlice } from "@reduxjs/toolkit";

import {
  getCardsThunk,
  addCardThunk,
  editCardThunk,
  deleteCardThunk,
  changeColumnThunk,
} from "./operations";

const initialState = {
  cards: [],
  error: null,
};

const slice = createSlice({
  name: "cards",
  initialState,
  selectors: {
    selectCards: (state) => state.cards,
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
        state.cards = state.cards.filter((card) => card._id !== payload._id);
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
    // .addCase(changeColumnThunk.fulfilled, (state, { payload }) => {
    //   const index = state.cards.findIndex((card) => card._id === payload._id);
    //   if (index !== -1) {
    //     state.cards[index].column_id = payload.column_id;
    //   } else {
    //     state.cards.push(payload.column_id);
    //   }
    // })
    // .addCase(changeColumnThunk.rejected, (state, { payload }) => {
    //   state.error = payload;
    // });
  },
});

export const cardsReducer = slice.reducer;
export const { selectCards } = slice.selectors;
