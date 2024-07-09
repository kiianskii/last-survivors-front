import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./cards/slice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
