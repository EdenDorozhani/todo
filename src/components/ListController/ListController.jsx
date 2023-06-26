import React from "react";
import "./ListController.css";
import ListElement from "./ListElement";
import FilterTodo from "../TodoController/FilterTodo";

const ListController = ({ todoGoals, deleteTodo }) => {
  const getIdHandler = (id) => {
    deleteTodo(id);
  };

  return (
    <section className="list-wraper">
      {todoGoals.map((todoGoal) => {
        return (
          <ListElement
            text={todoGoal.text}
            key={todoGoal.id}
            id={todoGoal.id}
            todoGoal={todoGoal}
            getId={getIdHandler}
          />
        );
      })}
    </section>
  );
};

export default ListController;
