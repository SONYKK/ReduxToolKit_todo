import { useAppDispatch } from "../store/hooks/hooks";
import {deleteTodo, toggleStatus} from "../store/toDoSlice";
import {FC} from 'react'

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
}

const ToDoItem: FC<TodoItemProps> = ({id, title, completed}) => {
  
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span
        className="delete"
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
}

export default ToDoItem;

