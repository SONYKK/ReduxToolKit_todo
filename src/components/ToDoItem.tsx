import { useAppDispatch } from "../store/hooks/hooks";
import { removeTodo, toggleTodo } from "../store/toDoSlice";
import {FC} from 'react'

interface TodoItemProps {
  id: string,
  title: string,
  complited: boolean,
}

const ToDoItem: FC<TodoItemProps> = ({id, title, complited}) => {
  
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => dispatch(toggleTodo({id}))}
      />
      <span>{title}</span>
      <span
        className="delete"
        onClick={() => dispatch(removeTodo({id}))}
      >
        &times;
      </span>
    </li>
  );
}

export default ToDoItem;
