import React from "react";

const Todo = (props) => {
  return (
    <div id={props.id}>
      <p>{props.todo}</p>
    </div>
  );
};

export default Todo;
