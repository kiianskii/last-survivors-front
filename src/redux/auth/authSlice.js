import { createSlice } from "@reduxjs/toolkit";
import {
  refreshThunk,
  registerThunk,
  logInThunk,
  logOutThunk,
  themeThunk,
  editUserThunk,
} from "./operations";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    theme: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectId: (state) => state.id,
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.id = payload.user.id;
        state.user.name = payload.user.username;
        state.user.email = payload.user.email;
        state.user.theme = payload.user.theme;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.user.id = payload.user.id;
        state.user.name = payload.user.username;
        state.user.email = payload.user.email;
        state.user.theme = payload.user.theme;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.id = payload.id;
        state.user.theme = payload.theme;
        state.user.name = payload.username;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(themeThunk.fulfilled, (state, { payload }) => {
        state.user.theme = payload;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        state.user.name = payload.username;
        state.user.email = payload.email;
      });
  },
});

export const authReducer = slice.reducer;
export const {
  selectToken,
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectId,
} = slice.selectors;
