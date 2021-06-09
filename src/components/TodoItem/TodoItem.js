import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap";
import { deleteTodo, updateTodo } from "../../actions";
import "./TodoItem.css";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={task.task} />
        <button type='submt'>Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
      <div className="TodoItem_Container">
        <div>
          <h4>
          {task.task}
          </h4>
        
        </div>
        <div className="Todo_buttons">
        <Button onClick={() => setIsUpdate(true)} variant="primary" >Edit</Button> &nbsp;
        <Button onClick={() => dispatch(deleteTodo(task.id))} variant="danger">Delete</Button>
        </div>
        </div>
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;
