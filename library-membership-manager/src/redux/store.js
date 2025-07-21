import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import memberReducer from "./slices/memberSlice";
export const store = configureStore({
  reducer: {
    books: bookReducer,
    members: memberReducer,
  },
});
