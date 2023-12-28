import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlices";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    userAuth: authSlice,
  },
});
