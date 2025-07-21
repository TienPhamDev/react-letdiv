import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Redux/slices/toDoSlice";
const TodoInput = () => {
  const dispatch = useDispatch();
  const [toDoText, setToDoText] = React.useState("");
  const handleAddToDo = () => {
    if (toDoText.trim === "") {
      alert("Vui long nhap ten cv");
      return;
    }
    const newToDo = {
      id: Date.now(),
      text: toDoText,
      completed: false,
    };
    dispatch(addToDo(newToDo));
    setToDoText("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhap cv"
        value={toDoText}
        onChange={(e) => setToDoText(e.target.value)}
      />
      <button onClick={handleAddToDo}>Add to do</button>
    </div>
  );
};

export default TodoInput;
