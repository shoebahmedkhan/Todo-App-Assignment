import { ADD_TODO, DELETE_TODO, SEARCH_TODO, UPDATE_TODO } from "./types";

export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = ({ message, id }) => ({
  type: UPDATE_TODO,
  message,
  id,
});
export const searchTodo =({message,id})=>({
  type : SEARCH_TODO,
  message,
  id,
});
