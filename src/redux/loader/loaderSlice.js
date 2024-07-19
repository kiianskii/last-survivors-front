import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  editAvatarThunk,
  editUserThunk,
  logInThunk,
  logOutThunk,
  needHelpThunk,
  registerThunk,
} from "../auth/operations";
import {
  addColumnThunk,
  deleteColumnThunk,
  editColumnThunk,
  fetchColumnsThunk,
} from "../boardByID/operations";
import {
  addCardThunk,
  changeColumnThunk,
  deleteCardThunk,
  editCardThunk,
} from "../cards/operations";
import {
  createBoard,
  deleteBoard,
  editBoard,
  fetchBoards,
} from "../boards/operations";

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
          registerThunk.pending,
          logInThunk.pending,
          logOutThunk.pending,
          fetchColumnsThunk.pending,
          addColumnThunk.pending,
          editColumnThunk.pending,
          deleteColumnThunk.pending,
          addCardThunk.pending,
          editCardThunk.pending,
          deleteCardThunk.pending,
          changeColumnThunk.pending,
          needHelpThunk.pending,
          createBoard.pending,
          editBoard.pending,
          deleteBoard.pending,
          fetchBoards.pending,
          editUserThunk.pending,
          editAvatarThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          logInThunk.fulfilled,
          logOutThunk.fulfilled,
          fetchColumnsThunk.fulfilled,
          addColumnThunk.fulfilled,
          editColumnThunk.fulfilled,
          deleteColumnThunk.fulfilled,
          addCardThunk.fulfilled,
          editCardThunk.fulfilled,
          deleteCardThunk.fulfilled,
          changeColumnThunk.fulfilled,
          needHelpThunk.fulfilled,
          createBoard.fulfilled,
          editBoard.fulfilled,
          deleteBoard.fulfilled,
          fetchBoards.fulfilled,
          editUserThunk.fulfilled,
          editAvatarThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected,
          fetchColumnsThunk.rejected,
          addColumnThunk.rejected,
          editColumnThunk.rejected,
          deleteColumnThunk.rejected,
          addCardThunk.rejected,
          editCardThunk.rejected,
          deleteCardThunk.rejected,
          changeColumnThunk.rejected,
          needHelpThunk.rejected,
          createBoard.rejected,
          editBoard.rejected,
          deleteBoard.rejected,
          fetchBoards.rejected,
          editUserThunk.rejected,
          editAvatarThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const loaderReducer = slice.reducer;
export const { selectIsLoading } = slice.selectors;
