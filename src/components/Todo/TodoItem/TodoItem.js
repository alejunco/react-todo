import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DeleteOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'

import { TodosContext } from 'contexts/TodosContext'

import Checkbox from 'components/Shared/Checkbox'

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-top: 16px;
  padding-bottom: 16px;
`

const PrimarySection = styled.div`
  display: inline-flex;
  align-items: center;
`

const RemoveButton = styled.div`
  border-radius: 6px;
  padding: 3px;
  cursor:pointer;
  transition-duration: 0.3s;
  transition-property: transform;
  &:hover {
    transform: scale(1.2);
    background: #de4c4a;
    box-shadow: -27px 26px 6px -23px rgba(0, 0, 0, 0.39);
  };
`

const ItemContent = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 18px;
  text-decoration: ${({ lineThrough }) => lineThrough ? 'line-through' : ''}
`
function TodoItem(props) {
  const { id, description, isCompleted } = props
  const { toggleTodoComplete, removeTodo } = useContext(TodosContext)

  function handleTodoCompleteChange() {
    toggleTodoComplete(id)
  }

  return (
    <TodoItemContainer>
      <PrimarySection>
        <Checkbox type={'checkbox'} checked={isCompleted} onChange={handleTodoCompleteChange} />
        <ItemContent lineThrough={isCompleted}>{description}</ItemContent>
      </PrimarySection>
      <RemoveButton onClick={() => removeTodo(id)}>
        <AntdIcon type={DeleteOutline} />
      </RemoveButton>
    </TodoItemContainer>
  )
}

TodoItem.propTypes = {
  id:          PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default TodoItem
