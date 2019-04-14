import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import TodosProvider, { TodosContext } from './TodosContext'

afterEach(cleanup)
beforeEach(() => localStorage.clear())

const todoOneFixture = { id: 1, description: 'test', isCompleted: false }

function setup(handleTodosChange, consumerComponent, todos) {
  return render(
    <TodosProvider onTodosChange={handleTodosChange} todos={todos}>
      <TodosContext.Consumer>
        {consumerComponent}
      </TodosContext.Consumer>
    </TodosProvider>
  )
}

it('Should add todo', () => {
  const handleTodosChange = jest.fn()

  const consumerComponent = ({ addTodo }) => {
    function handleOnClick() {
      addTodo(todoOneFixture)
    }
    return (
      <div>
        <button type={'button'} data-testid={'btn-add-todo'} onClick={handleOnClick} />
      </div>
    )
  }

  const utils = setup(handleTodosChange, consumerComponent)

  const button = utils.getByTestId('btn-add-todo')
  fireEvent.click(button)
  expect(handleTodosChange).toHaveBeenCalledTimes(2)
  expect(handleTodosChange).toHaveBeenLastCalledWith([{ ...todoOneFixture }])
})

it('Should remove a todo', () => {
  const handleTodosChange = jest.fn()

  const consumerComponent = ({ removeTodo }) => {
    function handleOnClick() {
      removeTodo(todoOneFixture.id)
    }
    return (
      <div>
        <button type={'button'} data-testid={'btn-remove-todo'} onClick={handleOnClick} />
      </div>
    )
  }

  const utils = setup(handleTodosChange, consumerComponent, [{ ...todoOneFixture }])

  const button = utils.getByTestId('btn-remove-todo')

  expect(handleTodosChange).toHaveBeenCalledWith([{ ...todoOneFixture }])

  fireEvent.click(button)

  expect(handleTodosChange).toHaveBeenLastCalledWith([])

  expect(handleTodosChange).toHaveBeenCalledTimes(2)
})

it('Should toggle todo\'s isComplete', () => {
  const handleTodosChange = jest.fn()

  const consumerComponent = ({ toggleTodoComplete }) => {
    function handleOnClick() {
      toggleTodoComplete(todoOneFixture.id)
    }
    return (
      <div>
        <button type={'button'} data-testid={'btn-toggle-todo'} onClick={handleOnClick} />
      </div>
    )
  }

  const utils = setup(handleTodosChange, consumerComponent, [{ ...todoOneFixture }])

  const button = utils.getByTestId('btn-toggle-todo')

  expect(handleTodosChange).toHaveBeenCalledWith([{ ...todoOneFixture }])

  fireEvent.click(button)

  expect(handleTodosChange).toHaveBeenLastCalledWith([{ ...todoOneFixture, isCompleted: true }])

  expect(handleTodosChange).toHaveBeenCalledTimes(2)
})
