import React, { useState } from "react";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import BookList from "../../components/BookList/BookList";
import MemberList from "../../components/MemberList/MemberList";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/bookSlice";
import { addMember } from "../../redux/slices/memberSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [addBookText, setAddBookText] = useState();
  const [addMemberText, setAddMemberText] = useState();

  const handleAddBook = () => {
    if (addBookText.trim()) {
      dispatch(
        addBook({
          id: Date.now(),
          title: addBookText,
          borrowed: false,
          borrowedBy: null,
          addedAt: new Date().toISOString(),
        })
      );
      setAddBookText("");
    }
  };
  const handleAddMember = () => {
    if (addMemberText.trim()) {
      dispatch(
        addMember({
          id: Date.now(),
          name: addMemberText,
          joinedAt: new Date().toISOString(),
        })
      );
    }
    setAddMemberText("");
  };
  return (
    <div>
      <input
        type="text"
        value={addBookText}
        onChange={(e) => setAddBookText(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
      <input
        type="text"
        value={addMemberText}
        onChange={(e) => setAddMemberText(e.target.value)}
      />
      <button onClick={handleAddMember}>Add Member</button>
      <FilterButtons />
      <BookList />
      <MemberList />
    </div>
  );
};

export default Home;
