import React, { useState } from "react";
import "./ListElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const ListElement = (props) => {
  const [isActive, setIsActive] = useState(true);

  const getRemovedElement = () => {
    props.getId(props.id);
  };

  const activeClassToggler = () => {
    setIsActive(!isActive);
    props.todoGoal.done = isActive;

    console.log(props.todoGoal);
  };

  return (
    <div
      className={props.todoGoal.done ? "list-content active" : "list-content"}
    >
      <FontAwesomeIcon
        className={props.todoGoal.done ? "check-mark active" : "check-mark"}
        icon={faCheck}
      />
      <div className="todo-content">
        <p onClick={activeClassToggler}>{props.text}</p>
      </div>
      <FontAwesomeIcon
        className="remove-button"
        icon={faXmark}
        onClick={getRemovedElement}
      />
    </div>
  );
};

export default ListElement;
