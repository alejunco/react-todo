import React from 'react'
import styled from 'styled-components'

import AddTodoForm from 'components/Todo/AddTodoForm'
import TodoList from 'components/Todo/TodoList'

const Container = styled.div`
  vertical-align: top;
  padding: 6px 30px 12px 30px;
`

function TodoPage() {
  return (
    <Container>
      <TodoList header={'Pending'} filter={(todo) => !todo.isCompleted} emptyMessage={'All Done, Woohoo! 👏'} />
      <AddTodoForm />
      <TodoList header={'Completed'} filter={(todo) => todo.isCompleted} emptyMessage={'Nothing yet... 🙀'} />
    </Container>
  )
}

export default TodoPage
