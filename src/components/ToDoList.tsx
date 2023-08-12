import ToDoItem from "./ToDoItem";
import {useAppSelector} from "../store/hooks/hooks";
import {memo} from "react";


function ToDoList() {
  
  const todos = useAppSelector(state=>state.todos.list)
  
  return (
    <ul>
      {todos.map((todo) => (
        
          <ToDoItem key={todo.id} {...todo}/>
        
      ))}
    </ul>
  );
}

export default memo(ToDoList);
