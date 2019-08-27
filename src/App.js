import { hot } from 'react-hot-loader'
import React, { useEffect, useState } from 'react'

import { FlexContainer, FlexItem } from './components/UI'
import { Header, Main } from './components'
import trafficMeister from './service'
import AppContext from './helpers/context'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    trafficMeister.fetchData((err, res) => {
      if (err) throw new Error(err)
      console.log(res)
      setData(res)
    })
  }, [])
  return (
    <AppContext.Provider value={{ data }}>
      <FlexContainer direction="column">
        <FlexItem>
          <Header />
        </FlexItem>
        <FlexItem>
          <Main />
        </FlexItem>
      </FlexContainer>
    </AppContext.Provider>
  )
}

export default hot(module)(App)
