import { createSlice } from '@reduxjs/toolkit'

let todoId = 1

export const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    create: (state, action) => {
      const { payload } = action
      state.push({ id: todoId, description: payload, isComplete: false })
      todoId++
    },
    edit: (state, action) => {
      const { id, description } = action.payload
      const todoEdit = state.find(todo => todo.id === id)
      if (todoEdit) {
        todoEdit.description = description
      }
    },
    toggleComplete: (state, action) => {
      const { payload } = action
      const todoToggle = state.find(todo => todo.id === payload)
      if (todoToggle) {
        todoToggle.isComplete = !todoToggle.isComplete
      }
    },
    deleteTodo: (state, action) => {
      const { payload } = action
      const index = state.findIndex(todo => todo.id === payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const selectTodo = state => state.todo
export const { create, edit, toggleComplete, deleteTodo } = slice.actions

export default slice.reducer
