import React from "react";
import { useSelector } from "react-redux";

const MemberList = () => {
  const members = useSelector((state) => state.members.members);
  return (
    <div>
      {members.map((member) => {
        return <div key={member.id}>{member.name}</div>;
      })}
    </div>
  );
};

export default MemberList;
