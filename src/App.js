import React from 'react'
import logo from './logo.svg'
// import { Counter } from './features/counter/Counter';
import { Todo } from './features/todo/Todo'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Todo />
      </header>
    </div>
  )
}

export default App
