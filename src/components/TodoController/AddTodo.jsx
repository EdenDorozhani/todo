import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = (prop) => {
  const [value, setValue] = useState("");

  const inputValueHandler = (e) => {
    setValue(e.target.value);
  };

  const getInputValue = (e) => {
    if (value.trim().length > 0) {
      prop.getValue(value.trim());
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="add-todo">
        <input
          type="text"
          value={value}
          className="input-field"
          placeholder="Write something..."
          onChange={inputValueHandler}
        ></input>
        <button type="submit" onClick={getInputValue} className="add-button">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
