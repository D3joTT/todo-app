import React, { useState } from "react";
import Assigment from "../task/Assigment";
import "./Tasks.scss";

export const Tasks = () => {
  const [tasks, setTasks] = useState([] as string[]);

  const addTask = (e: any) => {
    e.preventDefault();
    const toAdd = tasks;
    let task = e.target.elements.task.value;
    if (task === "") {
      alert("Podaj treść taska");
      return;
    }
    toAdd.push(task);
    setTasks([...toAdd]);
    e.target.elements.task.value = "";
  };

  const removeTask = (e: any, task: string) => {
    e.preventDefault();
    const toRemove = tasks.filter((val) => {
      return val !== task;
    });
    setTasks([...toRemove]);
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <h2>powered by react</h2>
      <form id="addtask-form" onSubmit={addTask}>
        <input
          className="form__field"
          type="text"
          name="task"
          placeholder="Wprowadź taska"
        ></input>
        {/* <input type="submit" value="Dodaj"></input> */}
        <button className="btn btn--primary btn--inside uppercase">
          Dodaj
        </button>
      </form>
      <div className="tasks-wrapper">
        <div className="tasks-side"></div>
        <div className="tasks-content">
          {tasks.map((name: any) => {
            return <Assigment name={name} removeTask={removeTask} />;
          })}
        </div>
        <div className="tasks-side"></div>
      </div>
    </div>
  );
};

export default Tasks;
