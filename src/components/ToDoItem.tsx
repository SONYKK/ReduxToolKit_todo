import { useAppDispatch } from "../store/hooks/hooks";
import {FC, memo} from 'react'
import {toggleStatus} from "../store/services/toggleStatus";
import {deleteTodo} from "../store/services/deleteToDo";

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
        style={{cursor:"pointer"}}
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

export default memo(ToDoItem);

