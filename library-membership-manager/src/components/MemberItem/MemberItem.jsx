import React from "react";
import { useDispatch } from "react-redux";
import { removeMember } from "../../redux/slices/memberSlice";

const MemberItem = ({ member }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeMember(member.id));
  };
  return (
    <div>
      <h3>{member.name}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MemberItem;
