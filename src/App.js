import { hot } from 'react-hot-loader'
import React, { useState, useEffect } from 'react'

import { FlexContainer, FlexItem } from './components/UI'
import { Header, Main } from './components'
import AppContext from './helpers/context'
import trafficMeister from './service'
import { filterData } from './helpers/helpers'

const App = () => {
  const [data, setData] = useState([])
  // this could be done with useReducer, but i leave it as is for simplicity
  const [filters, setFilters] = useState({})

  const filteredData = filterData(data, filters)

  useEffect(() => {
    trafficMeister.fetchData((err, res) => {
      if (err) throw new Error(err)
      setData(res)
    })
  }, [])

  return (
    <AppContext.Provider value={{ data, filters, setFilters, filteredData }}>
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
