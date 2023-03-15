import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import {useAppDispatch, useAppSelector} from "./store/hooks/hooks";
import {useState, useEffect} from 'react'
import {addNewTodo, fetchTodos} from "./store/toDoSlice";

function App() {
  
  const {loading, error} = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  
  useEffect(()=> {
    dispatch(fetchTodos())
  }, [dispatch]);
  
  const addTask = () => {
    dispatch(addNewTodo(title));
    setTitle('')
  }

  return (
    <div className="App">
      <NewToDo text = {title} handleInput={setTitle} handleSubmit={addTask}/>
      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occurred:{error} </h2>}
      
      <ToDoList />

    </div>
  );
}

export default App;
