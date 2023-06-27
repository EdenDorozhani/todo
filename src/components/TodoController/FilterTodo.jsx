import React from "react";
import "./FilterTodo.css";
import FilterHeader from "./FilterHeader";

const FilterTodo = ({ getValue, value }) => {
  const getFilterValue = (headerValue) => {
    getValue(headerValue);
  };

  return (
    <div className="filter-todo">
      <FilterHeader value={value} getFilterValue={getFilterValue} />
    </div>
  );
};

export default FilterTodo;
