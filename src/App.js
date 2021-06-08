import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";
import {Card} from "react-bootstrap";
function App() {
  const taskobj = useSelector((state) => state.todos.data);
  return (
    <>
    <div className='App'>
      <h1> assignment Todo-app total: {taskobj.length}</h1>
      </div>
      <div className="todo-container">
        <Card className="card__details"  >
        <AddTodo />
        <TodoList />
        </Card>
      
      </div>
     
    
    </>
  );
}

export default App;
