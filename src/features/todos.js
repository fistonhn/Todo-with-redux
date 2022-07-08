import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// get all todos
export const getTodos = createAsyncThunk('todos/getTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    console.log('response', response)

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

  },
})

export const todoSelector = (state) => state.todos
export const { cleanUnitsMessages } = todoSlice.actions
export default todoSlice.reducer
