import React, { useContext } from 'react'
import { TodosContext } from 'contexts/TodosContext'
import TodoItem from 'components/Todo/TodoItem'

function TodoList() {
  const { todos } = useContext(TodosContext)
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList
