import React from "react";
import "./DropDown.css";

const DropDown = ({ changeHeader }) => {
  const filterValue = (e) => {
    changeHeader(e.target.textContent);
  };

  return (
    <div className="dropdown-options">
      <div onClick={filterValue}>All</div>
      <div onClick={filterValue}>Completed</div>
      <div onClick={filterValue}>Uncompleted</div>
    </div>
  );
};

export default DropDown;
