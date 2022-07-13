import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// get all todos
export const getTodos = createAsyncThunk('todos/getTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:7000/employees')

    return response.data
  } catch (error) {
    if (!error.response) {
      return rejectWithValue(error)
    }
    return rejectWithValue(error.response.data)
  }
})

// create employee
export const createTodo = createAsyncThunk('todos/createTodo', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:7000/employees', data)

    return response.data
  } catch (error) {
    if (!error.response) {
      return rejectWithValue(error)
    }
    return rejectWithValue(error.response.data)
  }
})



export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    todosLoading: false,
    error: null,
    success: null,
    createMessage: null
  },
  extraReducers: {
    // get all todos
    [getTodos.pending]: (state) => {
      state.status = 'loading'
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.todos = payload
    },

    [getTodos.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload.error || payload.toString()
    },

    //create todo

    [createTodo.pending]: (state) => {
      state.status = 'loading'
    },
    [createTodo.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.createMessage = payload.message
    },

    [createTodo.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload.error || payload.toString()
    },

  },
})

export const todoSelector = (state) => state.todos
export const { cleanUnitsMessages } = todoSlice.actions
export default todoSlice.reducer
