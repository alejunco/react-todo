import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const TodosContext = React.createContext()

function TodosProvider(props) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || props.todos
  )


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    props.onTodosChange(todos)
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

  const stats = {
    total:     todos.length,
    completed: todos.filter((todo) => todo.isCompleted).length,
  }
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodoComplete,
        stats,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}

TodosProvider.propTypes = {
  todos:         PropTypes.array,
  children:      PropTypes.any,
  onTodosChange: PropTypes.func,
}

TodosProvider.defaultProps = {
  todos: [],
  onTodosChange() {},
}

export default TodosProvider
