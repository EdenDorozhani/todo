import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./FilterHeader.css";
import "./DropDown.css";

const FilterHeader = ({ getFilterValue, value }) => {
  const [open, setOpen] = useState(false);

  const dropDownHandler = () => {
    setOpen(!open);
  };

  const filterValue = (e) => {
    getFilterValue(e.target.textContent);
    setOpen(false);
  };

  return (
    <>
      <div className="filter-header">
        <p className="filter-value">{value}</p>
        <FontAwesomeIcon
          onClick={dropDownHandler}
          className="dropdown-btn"
          icon={faCaretDown}
        />
      </div>
      <div className={!open ? "dropdown-options" : "dropdown-options drop"}>
        <div onClick={filterValue}>All</div>
        <div onClick={filterValue}>Completed</div>
        <div onClick={filterValue}>Uncompleted</div>
      </div>
    </>
  );
};

export default FilterHeader;
