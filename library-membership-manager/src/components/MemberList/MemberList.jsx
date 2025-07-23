import React from "react";
import { useSelector } from "react-redux";
import MemberItem from "../MemberItem/MemberItem";

const MemberList = () => {
  const members = useSelector((state) => state.members.members);
  return (
    <div>
      <h2>Member</h2>
      {members.map((member) => {
        return <MemberItem key={member.id} member={member}></MemberItem>;
      })}
    </div>
  );
};

export default MemberList;
