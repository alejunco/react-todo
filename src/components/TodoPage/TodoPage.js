import React from 'react'

import AddTodoForm from 'components/Todo/AddTodoForm'
import TodoList from 'components/Todo/TodoList'

import Styled from './styles'

function TodoPage() {
  return (
    <Styled.Container>
      <TodoList header={'Pending'} filter={(todo) => !todo.isCompleted} />
      <AddTodoForm />
      <TodoList header={'Completed'} filter={(todo) => todo.isCompleted} />
    </Styled.Container>
  )
}

export default TodoPage
