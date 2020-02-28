import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todoReducer from './features/todo/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})
