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

const InitialSection = styled.div`
  display: inline-flex;
  align-items: center;
`

const Checker = styled(Checkbox)`
  padding-right:1em
`

const ItemContent = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 18px;
`
function TodoItem(props) {
  const { id, description, isCompleted } = props
  const { toggleTodoComplete, removeTodo } = useContext(TodosContext)

  function handleTodoCompleteChange() {
    toggleTodoComplete(id)
  }

  return (
    <TodoItemContainer>
      <InitialSection>
        <Checker type={'checkbox'} checked={isCompleted} onChange={handleTodoCompleteChange} />
        <ItemContent>{description}</ItemContent>
      </InitialSection>
      <div>
        {/* <button type={'button'} onClick={() => removeTodo(id)}>Remove</button> */}
        <AntdIcon type={DeleteOutline} onClick={() => removeTodo(id)} />
      </div>
    </TodoItemContainer>
  )
}

TodoItem.propTypes = {
  id:          PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

export default TodoItem
