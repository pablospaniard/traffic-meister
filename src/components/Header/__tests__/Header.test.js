import React from 'react'
import { render } from '@testing-library/react'
import serializer from 'jest-emotion'

import Header from '../Header'
import AppContext from '../../../helpers/context'
import { data, filters } from '../../../helpers/mock_tests'

expect.addSnapshotSerializer(serializer)

describe('Header component should works properly', () => {
  it('should match Snapshot', () => {
    const tree = (
      <AppContext.Provider value={{ data, filters }}>
        <Header />
      </AppContext.Provider>
    )
    const { container } = render(tree)
    expect(container.firstChild).toMatchSnapshot('Header_1')
  })

  it('should show selected items in selects', () => {
    const tree = (
      <AppContext.Provider value={{ filters }}>
        <Header />
      </AppContext.Provider>
    )
    const { getByText } = render(tree)
    getByText(/silver/i)
    getByText(/yokohama/i)
    getByText(/car/i)
  })
})
