import React from "react";
import "./InputController.css";
import AddTodo from "./AddTodo.jsx";

const InputController = (prop) => {
  const getValueHandler = (value) => {
    prop.addTodo(value);
  };

  return (
    <section className="form-wraper">
      <div className="controll-added-todo">
        <AddTodo getValue={getValueHandler} />
      </div>
    </section>
  );
};

export default InputController;
