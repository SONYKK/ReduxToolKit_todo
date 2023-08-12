import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import {Todo, TodosState} from "./type";
import {toggleStatus} from "./services/toggleStatus";
import {fetchTodos} from "./services/fetchToDos";
import {addNewTodo} from "./services/addNewToDo";
import {deleteTodo} from "./services/deleteToDo";

const initialState: TodosState = {
    list: [],
    loading: false,
    error: null,
}

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}

function setItemToLocalStorage(todo: Todo) {
    return window.localStorage.setItem(`todo id = ${todo.id}`,
        `title: ${todo.title}; complete:${todo.completed}`);
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
          state.list.forEach(todo=> setItemToLocalStorage(todo));
      })
      .addCase(addNewTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
          state.list.forEach(todo=> setItemToLocalStorage(todo));
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
            setItemToLocalStorage(toggledTodo);
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload); // для коррктного отображения результата
        window.localStorage.removeItem(`todo id = ${action.payload}`)
      } )
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export default todoSlice.reducer;
