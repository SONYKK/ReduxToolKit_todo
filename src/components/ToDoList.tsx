import { useSelector } from "react-redux/es/exports";
import { RootState } from "../store";
import ToDoItem from "./ToDoItem";


function ToDoList() {
  
  const todos = useSelector((state: RootState)=>state.todo.list)
  
  return (
    <ul>
      {todos.map((todo) => (
        
          <ToDoItem key={todo.id} {...todo}/>
        
      ))}
    </ul>
  );
}

export default ToDoList;
