import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='todo-form'>
        <input
          className='todo-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
        />
        <button className='todo-button'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm