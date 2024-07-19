import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteTransactionThunk,
  editTransactionThunk,
  sendTransactionThunk,
  transactionByDateThunk,
  userTransactionsThunk,
} from "../transactions/operations";
const initialState = {
  isLoading: false,

};

const slice = createSlice({
  name: "loader",
  initialState,
  selectors: {
    selectIsLoading: (state) => state.isLoading,
    
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          userTransactionsThunk.pending,
          transactionByDateThunk.pending,
          sendTransactionThunk.pending,
          editTransactionThunk.pending,
          deleteTransactionThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          userTransactionsThunk.fulfilled,
          transactionByDateThunk.fulfilled,
          sendTransactionThunk.fulfilled,
          editTransactionThunk.fulfilled,
          deleteTransactionThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          userTransactionsThunk.rejected,
          transactionByDateThunk.rejected,
          sendTransactionThunk.rejected,
          editTransactionThunk.rejected,
          deleteTransactionThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const loaderReducer = slice.reducer;
export const { selectIsLoading } = slice.selectors;
