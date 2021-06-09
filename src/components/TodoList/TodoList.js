import React, {useEffect, useState} from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const [tasksFiltData, setTasksFiltData]=useState([]);
  const searchText = useSelector((state) => state.searchReducer.searchData);
  useEffect(()=>{
    if(taskobj){
    const filtData= taskobj.filter(item=>item.task.indexOf(searchText) !==-1)
    setTasksFiltData([...filtData])
    console.log("Seatch Text:", searchText, filtData, taskobj)
    }
  },[searchText])
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;
