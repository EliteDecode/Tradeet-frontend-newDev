import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaltMiddleware) =>
    getDefaltMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
