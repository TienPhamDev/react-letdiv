import React from "react";
import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";

const BookList = () => {
  const { books, filter } = useSelector((state) => state.books);
  const filteredBooks = books.filter((book) => {
    if (filter === "all") return true;
    if (filter === "borrowed") return book.borrowed;
    if (filter === "available") return !book.borrowed;
    return true;
  });
  return (
    <div>
      <h2>Books</h2>
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
