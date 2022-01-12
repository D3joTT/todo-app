import React from "react";
import "./Assigment.scss";

export const Assigment = ({ name, removeTask }: any) => {
  console.log(name);
  return (
    <div className="task">
      <p>{name}</p>
      <button
        id="delete-task"
        onClick={(e) => {
          removeTask(e, name);
        }}
      >
        Usuń
      </button>
    </div>
  );
};

export default Assigment;
