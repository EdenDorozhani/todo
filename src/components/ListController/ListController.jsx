import React from "react";
import "./ListController.css";
import ListElement from "./ListElement";
import FilterTodo from "../TodoController/FilterTodo";

const ListController = ({ todoGoals, deleteTodo, value }) => {
  const getIdHandler = (id) => {
    deleteTodo(id);
  };

  return (
    <section className="list-wraper">
      {todoGoals
        .filter((todoGoal) => {
          if (value == "Completed") {
            return todoGoal.done === true;
          } else if (value == "Uncompleted") {
            return todoGoal.done === false;
          } else if (value == "All") {
            return todoGoal;
          }
        })
        .map((todoGoal) => {
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
