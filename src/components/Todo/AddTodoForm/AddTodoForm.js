import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { PlusOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'

import { TodosContext } from 'contexts/TodosContext'

import Button from 'components/Shared/Button'

const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  color: #808080;
  padding-right:.8em;
  font-size:1.2em;
`

function AddTodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const [editMode, setEditMode] = useState(false)

  const { addTodo } = useContext(TodosContext)

  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo !== '') {
      addTodo({ id: Date.now(), description: newTodo, isCompleted: false })
    }

    setNewTodo('')
    e.target.reset()
  }

  return (
    editMode
      ? (
        <form onSubmit={handleNewTodo}>
          <div>
            <input value={newTodo} placeholder={'Add Todo'} onChange={handleNewTodoChange} />
          </div>
          <div>
            <Button type={'button'} onClick={handleNewTodoChange}>
            Save
            </Button>
            <Button type={'button'} variant={'link'} onClick={() => setEditMode(false)}>
            Cancel
            </Button>
          </div>

        </form>
      ) : (
        <div>
          <Button type={'button'} variant={'link'} onClick={() => setEditMode(true)}>
            <LinkIcon>
              <AntdIcon type={PlusOutline} />
            </LinkIcon>
            Add Task
          </Button>
        </div>

      )
  )
}

export default AddTodoForm
