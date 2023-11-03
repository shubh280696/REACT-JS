import React, { useState } from 'react'
import './App.css'
import TodoInput from './componet/TodoInput'
import TodoList from './componet/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }
  return (
    <>
       <div className="main">
        <div className="center-container">
          <TodoInput addList={addList} />
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
