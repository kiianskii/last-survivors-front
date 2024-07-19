import { createSlice } from "@reduxjs/toolkit";
import {
  addColumnThunk,
  deleteColumnThunk,
  editColumnThunk,
  fetchColumnsThunk,
} from "./operations";
import {
  addCardThunk,
  changeColumnThunk,
  deleteCardThunk,
  editCardThunk,
} from "../cards/operations";

const initialState = {
  columns: [],
  error: null,
};

const columnsSlice = createSlice({
  name: "columnsByBoard",
  initialState,
  selectors: {
    selectColumns: (state) => state.columns,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColumnsThunk.fulfilled, (state, { payload }) => {
        state.columns = payload;
      })
      .addCase(addColumnThunk.fulfilled, (state, { payload }) => {
        const info = {
          ...payload,
          cards: [],
        };
        state.columns.push(info);
      })
      .addCase(deleteColumnThunk.fulfilled, (state, { payload }) => {
        state.columns = state.columns.filter(
          (column) => column._id !== payload._id
        );
      })
      .addCase(editColumnThunk.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(
          (column) => column._id === payload._id
        );
        if (index !== -1) {
          state.columns[index] = payload;
        } else {
          state.columns.push(payload);
        }
      })
      .addCase(addCardThunk.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(
          (column) => column._id === payload.column_id
        );
        if (index !== -1) {
          state.columns[index].cards.push(payload);
        }
      })
      .addCase(deleteCardThunk.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(
          (column) => column._id === payload.column_id
        );
        if (index !== -1) {
          state.columns[index].cards = state.columns[index].cards.filter(
            (card) => card._id !== payload._id
          );
        }
      })
      .addCase(editCardThunk.fulfilled, (state, { payload }) => {
        const columnIndex = state.columns.findIndex(
          (column) => column._id === payload.column_id
        );
        if (columnIndex !== -1) {
          const index = state.columns[columnIndex].cards.findIndex(
            (card) => card._id === payload._id
          );
          if (index !== -1) {
            state.columns[columnIndex].cards[index] = payload;
          }
        }
      })
      .addCase(changeColumnThunk.fulfilled, (state, { payload }) => {
        const columnIndex = state.columns.findIndex(
          (column) => column._id === payload.oldColumn_id
        );
        if (columnIndex !== -1) {
          const index = state.columns[columnIndex].cards.findIndex(
            (card) => card._id === payload._id
          );
          if (index !== -1) {
            state.columns[columnIndex].cards[index].column_id =
              payload.column_id;
          }
        }
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { selectColumns } = columnsSlice.selectors;
