import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./FilterHeader.css";
import DropDown from "./DropDown";

const FilterHeader = ({ getFilterValue }) => {
  const [value, setValue] = useState("All");

  const changeHeaderHandler = (Headervalue) => {
    setValue(Headervalue);
    getFilterValue(Headervalue);
  };

  return (
    <>
      <div className="filter-header">
        <p className="filter-value">{value}</p>
        <FontAwesomeIcon className="dropdown-btn" icon={faCaretDown} />
      </div>
      <DropDown changeHeader={changeHeaderHandler} />
    </>
  );
};

export default FilterHeader;
