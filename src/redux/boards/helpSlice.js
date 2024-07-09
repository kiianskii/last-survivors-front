import { createSlice } from "@reduxjs/toolkit";
import { sendHelpRequest } from "./operations";

const helpSlice = createSlice({
  name: "help",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendHelpRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendHelpRequest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendHelpRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default helpSlice.reducer;
