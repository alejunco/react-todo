import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { PlusOutline } from '@ant-design/icons'
import AntdIcon from '@ant-design/icons-react'

import { TodosContext } from 'contexts/TodosContext'

import Button from 'components/Shared/Button'
import TextField from 'components/Shared/TextField'

const Container = styled.div`
  margin-bottom:30px
`
const FormControl = styled.div`
  background-color: #171717 !important;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 3px;
  margin:8px 0;
`
const IconButton = styled.span`
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
  }

  return (
    <Container>
      {
        editMode
          ? (
            <form onSubmit={handleNewTodo}>
              <FormControl>
                <TextField value={newTodo} onChange={handleNewTodoChange} />
              </FormControl>
              <div>
                <Button type={'button'} onClick={handleNewTodo}>
            Add Task
                </Button>
                <Button type={'button'} variant={'link'} onClick={() => setEditMode(false)}>
            Cancel
                </Button>
              </div>
            </form>
          ) : (
            <Button type={'button'} variant={'link'} onClick={() => setEditMode(true)}>
              <IconButton>
                <AntdIcon type={PlusOutline} />
              </IconButton>
              Add Task
            </Button>
          )
      }
    </Container>
  )
}

export default AddTodoForm
