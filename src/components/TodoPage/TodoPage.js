import React from 'react'

import AddTodoForm from 'components/Todo/AddTodoForm'
import TodoList from 'components/Todo/TodoList'

import Styled from './styles'

function TodoPage() {
  return (
    <Styled.Container>
      <AddTodoForm />
      <TodoList />
    </Styled.Container>
  )
}

export default TodoPage
