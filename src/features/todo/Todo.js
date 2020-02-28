import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit, toggleComplete } from './todoSlice'
import { deleteTodo, selectTodo } from './todoSlice'
import styles from './Todos.module.css'

export function Todo() {
  const [inputText, setInputText] = useState('')
  const [isEditing, setIsEditing] = useState(-1)
  const [editText, setEditText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(selectTodo)

  function handleChange(event) {
    setInputText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(create(inputText))
    setInputText('')
  }

  function handleDelete(id) {
    return function() {
      dispatch(deleteTodo(id))
    }
  }

  function handleToggle(id) {
    return function() {
      dispatch(toggleComplete(id))
    }
  }

  function handleEdit(id, description) {
    return function() {
      setIsEditing(id)
      setEditText(description)
    }
  }

  function handleEditText(event) {
    setEditText(event.target.value)
  }

  function handleUpdate(event) {
    event.preventDefault()
    dispatch(edit({ id: isEditing, description: editText }))
    setIsEditing(-1)
    setEditText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          type='text'
          onChange={handleChange}
          value={inputText}
        />
        <input className={styles.textInput} type='submit' value='Submit' />
      </form>
      {todos.map(function(todo) {
        return (
          <div className={styles.todo} key={todo.id}>
            {isEditing === todo.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  className={styles.textInput}
                  type='text'
                  value={editText}
                  onChange={handleEditText}
                />
                <input
                  className={styles.textInput}
                  type='submit'
                  value='Update'
                />
              </form>
            ) : (
              <>
                {todo.description}{' '}
                {todo.isComplete ? (
                  <span className={styles.pill}>Done</span>
                ) : (
                  ''
                )}
                <span
                  className={styles.todoButton}
                  onClick={handleDelete(todo.id)}>
                  Delete
                </span>
                <span
                  className={styles.todoButton}
                  onClick={handleToggle(todo.id)}>
                  Toggle
                </span>
                <span
                  className={styles.todoButton}
                  onClick={handleEdit(todo.id, todo.description)}>
                  Edit
                </span>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
