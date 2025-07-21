import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBook, toggleBorrwed } from "../../redux/slices/bookSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);
  const handleDelete = () => {
    dispatch(removeBook(book.id));
  };
  const handleDToggleBorrowed = (e) => {
    const memberId =
      e.target.value === "available" ? null : Number(e.target.value);
    dispatch(toggleBorrwed({ bookId: book.id, memberId }));
  };
  return (
    <div>
      <Link to="/books/:id">Title: {book.title}</Link>
      <div>
        <select
          value={book.borrowedBy || "available"}
          onChange={handleDToggleBorrowed}
        >
          <option value="available">available</option>
          {members.map((member) => {
            return (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookItem;
