import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos'
import employeeReducer from '../features/employees'


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    employees: employeeReducer
  },
})