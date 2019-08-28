import React from 'react'
import { render } from '@testing-library/react'
import serializer from 'jest-emotion'

import Main from '../Main'
import AppContext from '../../../helpers/context'
import { data } from '../../../helpers/mock_tests'

expect.addSnapshotSerializer(serializer)

const tree = (
  <AppContext.Provider value={{ data, filteredData: data }}>
    <Main />
  </AppContext.Provider>
)

describe('Main component should works properly', () => {
  it('should match Snapshot', () => {
    const { container } = render(tree)
    expect(container.firstChild).toMatchSnapshot('Main_1')
  })

  it('should show Loader while data is empty', () => {
    const emptyTree = (
      <AppContext.Provider value={{ data: [], filteredData: data }}>
        <Main />
      </AppContext.Provider>
    )
    const { getByTestId } = render(emptyTree)
    getByTestId(/loading/i)
  })
})
