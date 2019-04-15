import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TodosContext } from 'contexts/TodosContext'
import TodoItem from 'components/Todo/TodoItem'

const StyledTodoList = styled.ul`
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  list-style-type: none;
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

const EmptyListMessage = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function TodoList({ header, filter, emptyMessage }) {
  const { todos } = useContext(TodosContext)
  const filtered = todos.filter(filter)
  return (
    <StyledTodoList>
      {header ? <TodoListHeader>{header}</TodoListHeader> : null}
      {
        filtered.length ? filtered.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))
          : (
            <EmptyListMessage>
              <h4>{emptyMessage}</h4>
            </EmptyListMessage>
          )
      }
    </StyledTodoList>
  )
}

TodoList.propTypes = {
  header:       PropTypes.string,
  emptyMessage: PropTypes.string,
  filter:       PropTypes.func,
}

TodoList.defaultProps = {
  emptyMessage: 'Nothing here yet',
  filter() { return true },
}

export default TodoList
