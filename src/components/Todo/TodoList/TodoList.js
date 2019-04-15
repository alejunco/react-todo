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

const TodoListHeader = styled.h2`
  font-size: 14px;
  padding: 0 6px;
  font-weight: bold;
  color: #de4c4a;
  border-bottom: 1px solid #f0f0f0c4;
  padding-bottom: .7em;
  margin-bottom: 0;
`

function TodoList(props) {
  const { todos } = useContext(TodosContext)
  const { header, filter } = props
  return (
    <List>
      {header ? <TodoListHeader>{header}</TodoListHeader> : null}
      {
        todos.filter(filter).map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem {...todo} />
          </ListItem>
        ))
      }
    </List>
  )
}

export default TodoList
