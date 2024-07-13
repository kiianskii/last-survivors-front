import { createSlice } from "@reduxjs/toolkit";
import { createBoard, deleteBoard, editBoard, fetchBoards } from "./operations";

const initialState = {
  boards: [],
  error: null,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  selectors: {
    boardsSelector: (state) => state.boards,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        state.boards.push(payload);
      })
      .addCase(createBoard.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchBoards.fulfilled, (state, { payload }) => {
        state.boards = payload;
      })
      .addCase(fetchBoards.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteBoard.fulfilled, (state, { payload }) => {
        state.boards = state.boards.filter((board) => board._id !== payload);
      })
      .addCase(deleteBoard.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        console.log(payload);
        const index = state.boards.findIndex(
          (board) => board._id === payload._id
        );
        if (index !== -1) {
          state.boards[index] = payload;
        } else {
          state.boards.push(payload);
        }
      })
      .addCase(editBoard.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
export const { boardsSelector } = boardsSlice.selectors;
