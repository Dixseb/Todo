import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Done from './Done';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, done: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const doneTodo = (id) => {
      let updatedTodos = todos.map((todo) => {
        if(todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
  
      setTodos(updatedTodos)
    }
    let sortedTodos = todos.sort((a, b) => b.done - a.done)

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <Done removeTodo={removeTodo}  doneTodo={doneTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  )
}

export default TodoList