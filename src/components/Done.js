import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"

function Done(props) {
  const { todo, removeTodo, doneTodo } = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.done ? { background: "green" } : {}}>
      {todo.text}
      <div className="iconsContainer">
          <button onClick={() => doneTodo(todo.id)}><BiCheckCircle/></button>
          <button><RiCloseCircleLine  onClick={() => removeTodo(todo.id)}/></button>
      </div>
    </div>
  )
}

export default Done