import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// get all getEmployees
export const getEmployees = createAsyncThunk('employees/getEmployees', async (_, { rejectWithValue }) => {
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
export const createEmployees = createAsyncThunk('employees/createEmployees', async (data, { rejectWithValue }) => {
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


// update employee
export const updateEmployees = createAsyncThunk('employees/updateEmployees', async (data, { rejectWithValue }) => {
    try {
        const id = data.id
        const newData = {
            name: data.name,
            role: data.role
        }
      const response = await axios.patch(`http://localhost:7000/employees/${id}`, newData)
  
      return response.data
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error)
      }
      return rejectWithValue(error.response.data)
    }
  })

  // delete employee
export const deleteEmployees = createAsyncThunk('employees/deleteEmployees', async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:7000/employees/${id}`)
  
      return response.data
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error)
      }
      return rejectWithValue(error.response.data)
    }
  })



export const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    employeesLoading: false,
    error: null,
    success: null,
    createMessage: null,
    updateMessage: null,
    deleteMessage: null
  },
  extraReducers: {
    // get all employees
    [getEmployees.pending]: (state) => {
      state.status = 'loading'
    },
    [getEmployees.fulfilled]: (state, { payload }) => {

      state.status = 'success'
      state.employees = payload
    },

    [getEmployees.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload.error || payload.toString()
    },

    //create todo

    [createEmployees.pending]: (state) => {
      state.status = 'loading'
    },
    [createEmployees.fulfilled]: (state, { payload }) => {
      state.status = 'success'
      state.createMessage = payload.message
    },

    [createEmployees.rejected]: (state, { payload }) => {
      state.status = 'failed'
      state.error = payload.error || payload.toString()
    },

    //updateEmployees

    [updateEmployees.pending]: (state) => {
        state.status = 'loading'
    },
    [updateEmployees.fulfilled]: (state, { payload }) => {
        state.status = 'success'
        state.updateMessage = payload.message
    },

    [updateEmployees.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.error || payload.toString()
    },

    //deleteEmployees

    [deleteEmployees.pending]: (state) => {
        state.status = 'loading'
    },
    [deleteEmployees.fulfilled]: (state, { payload }) => {
        state.status = 'success'
        state.deleteMessage = payload.message
    },

    [deleteEmployees.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.error || payload.toString()
    },

  },
})

export const employeeSelector = (state) => state.employees
export default employeeSlice.reducer
