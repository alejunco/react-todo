import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Collapse from './Collapse'
import Panel from './Panel'

const setup = (handleCollapseChange) => {
  const utils = render(
    <Collapse onChange={handleCollapseChange}>
      <Panel header={'Alligator Mississippiensis'} key={'idOne'}>Content</Panel>
      <Panel header={'Alligator Mississippiensis'} key={'idTwo'}>Content</Panel>
    </Collapse>
  )
  const panelOneButton = utils.getByTestId('panel-button-idOne')
  const panelTwoButton = utils.getByTestId('panel-button-idTwo')

  return {
    panelOneButton,
    panelTwoButton,
    ...utils,
  }
}

afterEach(cleanup)

test('It should open closed panel on click', () => {
  const handleCollapseChange = jest.fn()

  const { panelOneButton } = setup(handleCollapseChange)

  fireEvent.click(panelOneButton)

  expect(handleCollapseChange).toHaveBeenCalledTimes(1)
  expect(handleCollapseChange).toHaveBeenCalledWith(['idOne'])
})

test('It should toggle panel state on click', () => {
  const handleCollapseChange = jest.fn()

  const { panelOneButton } = setup(handleCollapseChange)

  fireEvent.click(panelOneButton)
  fireEvent.click(panelOneButton)

  expect(handleCollapseChange).toHaveBeenCalledTimes(2)
  expect(handleCollapseChange).toHaveBeenLastCalledWith([])
})


test('It should open multiples', () => {
  const handleCollapseChange = jest.fn()

  const { panelOneButton, panelTwoButton } = setup(handleCollapseChange)

  fireEvent.click(panelOneButton)
  fireEvent.click(panelTwoButton)

  expect(handleCollapseChange).toHaveBeenCalledTimes(2)
  expect(handleCollapseChange).toHaveBeenLastCalledWith(['idOne', 'idTwo'])
})

test('It should open the default panel', () => {
  const handleCollapseChange = jest.fn()

  const utils = render(
    <Collapse defaultActiveKey={['idOne']} onChange={handleCollapseChange}>
      <Panel header={'Alligator Mississippiensis'} key={'idOne'}>Content</Panel>
    </Collapse>
  )

  const panelOneButton = utils.getByTestId('panel-button-idOne')

  fireEvent.click(panelOneButton)

  expect(handleCollapseChange).toHaveBeenCalledTimes(1)
  expect(handleCollapseChange).toHaveBeenLastCalledWith([])
})
