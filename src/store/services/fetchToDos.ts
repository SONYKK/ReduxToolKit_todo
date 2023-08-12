import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo} from "../type";

export const fetchTodos = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        
        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }
        
        const data = await response.json();
        
        return data;
    }
);
