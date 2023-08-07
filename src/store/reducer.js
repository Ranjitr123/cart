import {  createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: 1,
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
      multiplication: (state) => state * 5,
    },
  });

  export default counterSlice