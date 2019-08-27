import { hot } from 'react-hot-loader'
import React, { useState } from 'react'

import { FlexContainer, FlexItem } from './components/UI'
import { Header, Main } from './components'
import AppContext from './helpers/context'

const App = () => {
  const [data, setData] = useState([])
  // this could be done with useReducer, but i leave it as is for simplicity
  const [filters, setFilters] = useState({})

  return (
    <AppContext.Provider value={{ data, filters, setFilters, setData }}>
      <FlexContainer direction="column">
        <FlexItem>
          <Header />
        </FlexItem>
        <br />
        <FlexItem>
          <Main />
        </FlexItem>
      </FlexContainer>
    </AppContext.Provider>
  )
}

export default hot(module)(App)
