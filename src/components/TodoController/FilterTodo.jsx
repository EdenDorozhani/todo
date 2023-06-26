import React from "react";
import "./FilterTodo.css";
import FilterHeader from "./FilterHeader";

const FilterTodo = ({ getValue }) => {
  const getFilterValue = (Headervalue) => {
    getValue(Headervalue);
  };

  return (
    <div className="filter-todo">
      <FilterHeader getFilterValue={getFilterValue} />
    </div>
  );
};

export default FilterTodo;
