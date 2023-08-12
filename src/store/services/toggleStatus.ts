import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo, TodosState} from "../type";

export const toggleStatus = createAsyncThunk<Todo, string, { rejectValue: string, state: { todos: TodosState} }>(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, getState }) {
        const todo = getState().todos.list.find(todo => todo.id === id);
        
        if (todo) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            
            if (!response.ok) {
                return rejectWithValue('Can\'t toggle status. Server error.');
            }
            
            return (await response.json()) as Todo;
        }
        
        return rejectWithValue('No such todo in the list!')
    }
);
