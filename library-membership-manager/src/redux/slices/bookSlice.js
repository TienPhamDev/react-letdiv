import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filter: "all",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    toggleBorrwed: (state, action) => {
      const { bookId, memberId } = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      if (book) {
        book.borrowed = memberId !== null;
        book.borrowedBy = memberId;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addBook, removeBook, toggleBorrwed, setFilter } =
  bookSlice.actions;
export default bookSlice.reducer;
