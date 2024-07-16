import { createSlice } from "@reduxjs/toolkit";
import {
  addColumnThunk,
  deleteColumnThunk,
  fetchColumnsThunk,
} from "./operations";

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
        state.columns.push(payload);
      })
      .addCase(deleteColumnThunk.fulfilled, (state, { payload }) => {
        state.columns = state.columns.filter(
          (column) => column._id !== payload._id
        );
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { selectColumns } = columnsSlice.selectors;
