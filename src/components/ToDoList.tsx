import ToDoItem from "./ToDoItem";
import {useAppSelector} from "../store/hooks/hooks";


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

export default ToDoList;
