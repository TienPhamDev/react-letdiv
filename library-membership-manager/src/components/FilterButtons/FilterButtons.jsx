import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/bookSlice";
const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("borrowed"))}>Borrowed</button>
      <button onClick={() => dispatch(setFilter("available"))}>
        Available
      </button>
    </div>
  );
};

export default FilterButtons;
