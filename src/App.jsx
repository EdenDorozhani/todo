import React, { useState } from "react";

import "./App.css";
import InputController from "./components/TodoController/InputController.jsx";
import Title from "./components/Title/Title";
import ListController from "./components/ListController/ListController";

function App() {
  const [todoGoals, setTodoGoals] = useState([]);

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

  const getFilterValue = (filterValue) => {
    console.log(filterValue);

    if (filterValue === "Completed") {
      const filteredGoals = todoGoals.filter((todoGoal) => {
        return todoGoal.done === true;
      });
      setTodoGoals(filteredGoals);
    } else if (filterValue === "Uncompleted") {
      const filteredGoals = todoGoals.filter((todoGoal) => {
        return todoGoal.done === false;
      });
      setTodoGoals(filteredGoals);
    } else {
      setTodoGoals(todoGoals);
    }
  };

  return (
    <div className="wraper">
      <Title />
      <div className="todo-app">
        <InputController filterTodo={getFilterValue} addTodo={addTodoHandler} />
        <ListController todoGoals={todoGoals} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
