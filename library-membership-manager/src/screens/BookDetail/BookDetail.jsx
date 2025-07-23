import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const members = useSelector((state) => state.members.members);
  const currentBook = books.find((book) => book.id === Number(id));
  if (!currentBook) {
    return (
      <div>
        <h2>Book not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
  const borrower = currentBook.borrowedBy
    ? members.find((m) => m.id === currentBook.borrowedBy)
    : null;
  return (
    <div>
      <h2>Book detail</h2>
      <p>{currentBook.title}</p>
      <p>Added At: {new Date(currentBook.addedAt).toLocaleString()}</p>
      <p>Status :{currentBook.borrowed ? "Borrowed" : "Available"}</p>
      {borrower && (
        <p>
          Borrowed By:<Link to={`/member/${borrower.id}`}>{borrower.name}</Link>
        </p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};

export default BookDetail;
