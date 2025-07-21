import React from "react";
import TodoInput from "../../Components/Todoinput";
import TodoList from "../../Components/TodoList";

const Home = () => {
  return (
    <div>
      <h1>Ung dung todo list</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Home;
