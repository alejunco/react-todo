import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodosContext } from 'contexts/TodosContext'
import TodoItem from 'components/Todo/TodoItem'

const List = styled.ul`
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  list-style-type: none;
`

const ListItem = styled.li`
  page-break-inside: avoid;
  padding: 0 6px 0 6px;
  font-size: 14px;
  position: relative;
  border-radius: 3px;
`

function TodoList() {
  const { todos } = useContext(TodosContext)
  return (
    <List>
      {
        todos.map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem {...todo} />
          </ListItem>
        ))
      }
    </List>
  )
}

export default TodoList
