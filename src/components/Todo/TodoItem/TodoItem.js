import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { TodosContext } from 'contexts/TodosContext'

function TodoItem(props) {
  const { id, description, isCompleted } = props
  const { toggleTodoComplete, removeTodo } = useContext(TodosContext)

  function handleTodoCompleteChange() {
    toggleTodoComplete(id)
  }

  return (
    <div>
      <input type={'checkbox'} checked={isCompleted} onChange={handleTodoCompleteChange} />
      <span>{description}</span>
      <button type={'button'} onClick={() => removeTodo(id)}>Remove</button>
    </div>
  )
}

TodoItem.propTypes = {
  id:          PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default TodoItem
