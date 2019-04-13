import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const TodosContext = React.createContext()

function TodosProvider(props) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(newTodo) {
    setTodos((prevTodos) => ([...prevTodos, newTodo]))
  }

  function removeTodo(id) {
    const shallowTodos = [...todos]
    const index = shallowTodos.findIndex((item) => item.id === id)
    if (index !== -1) {
      shallowTodos.splice(index, 1)
      setTodos([...shallowTodos])
    }
  }

  function toggleTodoComplete(id) {
    const index = todos.findIndex((item) => item.id === id)
    const shallowTodos = [...todos]
    shallowTodos[index].isCompleted = !shallowTodos[index].isCompleted
    setTodos(shallowTodos)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodoComplete,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}

TodosProvider.propTypes = {
  children: PropTypes.any,
}

export default TodosProvider
