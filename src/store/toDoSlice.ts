import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
    id: string;
    title: string;
    complited: boolean;
  };

  type TodosState = {
    list: Todo[];
  }

const initialState: TodosState ={
   list: []
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        complited: false,
      });
    },
    removeTodo(state, action) {
        state.list = state.list.filter(list => list.id !== action.payload.id)
    },
    toggleTodo(state, action) {
        const toggled = state.list.find(todo => todo.id === action.payload.id);
        if (toggled) {
            toggled.complited = !toggled?.complited;
        }
    },
  },
  extraReducers: {},
});

export default todoSlice.reducer;
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions