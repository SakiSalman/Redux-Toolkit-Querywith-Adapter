import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "../features/Auth/authSlice";
import userSlice from "../features/user/userSlice";

// configure store

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth : authSlice,
    user : userSlice
  },
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(apiSlice.middleware)),
  devTools: true,
});
