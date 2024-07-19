import { createSlice } from "@reduxjs/toolkit";
import {
  refreshThunk,
  registerThunk,
  logInThunk,
  logOutThunk,
  themeThunk,
  editUserThunk,
  editAvatarThunk,
} from "./operations";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    theme: "light",
    avatarURL: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectId: (state) => state.user.id,
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
    selectAvatar: (state) => state.user.avatarURL,
    selectTheme: (state) => state.user.theme,
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
        state.user.avatarURL = payload.user.avatarURL;
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
        state.user.avatarURL = payload.avatarURL;
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
      })
      .addCase(editAvatarThunk.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
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
  selectAvatar,
  selectTheme,
} = slice.selectors;
