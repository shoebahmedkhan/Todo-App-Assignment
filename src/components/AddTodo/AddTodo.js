import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap"
import { addTodo } from "../../actions";
import cuid from "cuid";
import "./AddTodo.css";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input className="todo-input"
        type='text'
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />&nbsp;
      <Button type='submit' variant="info" className="todo-button" >Add</Button>
    </form>
  );
};

export default AddTodo;
