import React from "react";
import { toggleTodo, deleteTodo } from "../Redux/slices/toDoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div>
      <input type="checkbox" onChange={handleToggleTodo} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
