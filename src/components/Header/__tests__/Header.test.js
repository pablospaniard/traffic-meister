import React from 'react'
import { render } from '@testing-library/react'

import Header from '../Header'
import AppContext from '../../../helpers/context'

const filters = {
  type: { label: 'car', value: 'Car' },
  brand: { label: 'yokohama', value: 'Yokohama' },
  color: { label: 'silver', value: 'silver' }
}
const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Bugatti Veyron',
    colors: ['red', 'black'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
  },
  {
    id: 2,
    type: 'airplane',
    brand: 'Boeing 787 Dreamliner',
    colors: ['red', 'white', 'black', 'green'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
  }
]

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
})
