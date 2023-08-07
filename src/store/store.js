// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement,multiplication } = counterSlice.actions;

export default store;
