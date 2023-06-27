import React, { useState } from "react";
import FilterTodo from "./components/TodoController/FilterTodo.jsx";
import "./App.css";
import InputController from "./components/TodoController/InputController.jsx";
import Title from "./components/Title/Title";
import ListController from "./components/ListController/ListController";

function App() {
  const [todoGoals, setTodoGoals] = useState([]);
  const [value, setValue] = useState("All");
  const addTodoHandler = (value) => {
    setTodoGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: value,
        id: Math.random().toString(),
        done: false,
      });
      return updatedGoals;
    });
  };

  const deleteTodoHandler = (id) => {
    setTodoGoals((prevGoals) => {
      const filteredGoal = prevGoals.filter((todoGoal) => {
        return todoGoal.id !== id;
      });
      return filteredGoal;
    });
  };

  const getFilterValue = (headerValue) => {
    setValue(headerValue);
  };

  return (
    <div className="wraper">
      <Title />
      <div className="todo-app">
        <div className="todo-action">
          <InputController
            filterTodo={getFilterValue}
            addTodo={addTodoHandler}
          />
          <FilterTodo value={value} getValue={getFilterValue} />
        </div>
        <ListController
          value={value}
          todoGoals={todoGoals}
          deleteTodo={deleteTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
