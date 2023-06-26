import React from "react";

import "./InputController.css";
import AddTodo from "./AddTodo.jsx";
import FilterTodo from "./FilterTodo.jsx";

const InputController = (prop) => {
  const getValueHandler = (value) => {
    prop.addTodo(value);
  };

  const getFilterValue = (Headervalue) => {
    prop.filterTodo(Headervalue);
  };

  return (
    <section className="form-wraper">
      <div className="controll-added-todo">
        <AddTodo getValue={getValueHandler} />
        <FilterTodo getValue={getFilterValue} />
      </div>
    </section>
  );
};

export default InputController;
