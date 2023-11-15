import { configureStore } from "@reduxjs/toolkit";
import { filesSlice } from "./filesSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: {
      [filesSlice.name]: filesSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(store);
