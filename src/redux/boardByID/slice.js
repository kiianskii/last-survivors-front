import { createSlice } from "@reduxjs/toolkit";
import {
  addColumnThunk,
  deleteColumnThunk,
  editColumnThunk,
  fetchColumnsThunk,
  filterColumnThunk,
} from "./operations";
import {
  addCardThunk,
  changeColumnThunk,
  deleteCardThunk,
  editCardThunk,
} from "../cards/operations";
import { logOutThunk } from "../auth/operations";

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
          state.columns[index].title = payload.title;
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
            const selectedCard = state.columns[columnIndex].cards.splice(
              index,
              1
            );

            const newColumnIndex = state.columns.findIndex(
              (column) => column._id === payload.column_id
            );
            if (newColumnIndex !== -1) {
              state.columns[newColumnIndex].cards.push({
                ...selectedCard[0],
                column_id: payload.column_id,
              });
            }
          }
        }
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.columns = [];
      })
      .addCase(filterColumnThunk.fulfilled, (state, { payload }) => {
        state.columns = payload;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { selectColumns } = columnsSlice.selectors;
