import { createSlice } from "@reduxjs/toolkit";
import { needHelpThunk } from "../auth/operations";

const helpSlice = createSlice({
  name: "help",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(needHelpThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(needHelpThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(needHelpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default helpSlice.reducer;
