import { hot } from 'react-hot-loader'
import React, { useState, useEffect } from 'react'

import { FlexContainer, FlexItem } from './components/UI'
import { Header, Main } from './components'
import AppContext from './helpers/context'
import trafficMeister from './service'
import { filterData } from './helpers/helpers'

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  // this could be done with useReducer, but i leave it as is for simplicity
  const [filters, setFilters] = useState({})

  const filteredData = filterData(data, filters)

  useEffect(() => {
    trafficMeister.fetchData((err, res) => {
      if (err) {
        setError(true)
        throw new Error(err)
      }
      setData(res)
      setError(false)
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
          {error ? (
            <div style={{ textAlign: 'center' }}>
              Ups, please do it again. Reload the page!
            </div>
          ) : (
            <Main />
          )}
        </FlexItem>
      </FlexContainer>
    </AppContext.Provider>
  )
}

export default hot(module)(App)
