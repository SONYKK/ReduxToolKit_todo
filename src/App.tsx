import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import { useAppDispatch } from "./store/hooks/hooks";
import {useState} from 'react'
import { addTodo } from "./store/toDoSlice";



function App() {

  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  const addTask = () => {
    dispatch(addTodo({title}));
    setTitle('')
  }

  return (
    <div className="App">
      <NewToDo text = {title} handleInput={setTitle} handleSubmit={addTask}/>
      <ToDoList />

    </div>
  );
}

export default App;
