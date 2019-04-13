import React, { useState, useContext } from 'react'
import { TodosContext } from 'contexts/TodosContext'
// import TodoItem from './node_modules/components/Todo/TodoItem'

function AddTodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const { addTodo } = useContext(TodosContext)

  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo !== '') {
      addTodo({ id: Date.now(), description: newTodo, isCompleted: false })
    }

    setNewTodo('')
    e.target.reset()
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input value={newTodo} placeholder={'Add Todo'} onChange={handleNewTodoChange} />
    </form>
  )
}

export default AddTodoForm
