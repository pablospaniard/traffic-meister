import React, { useState, useContext, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'

import { FlexContainer, FlexItem, Select } from '../UI'
import AppContext from '../../helpers/context'

let arrayOfTypes = []

const Header = () => {
  const [types, setTypes] = useState({})
  const [type, setType] = useState('')
  const { data } = useContext(AppContext)

  useEffect(() => {
    if (!isEmpty(data)) {
      arrayOfTypes = data.map(i => i.type)
      const uniqueTypes = Array.from(new Set(arrayOfTypes))
      setTypes(uniqueTypes)
    }
  }, [data])

  const handleChange = item => {
    setType(item)
  }

  return (
    <>
      <h1>The Traffic Meister</h1>
      <FlexContainer>
        <FlexItem>
          <Select
            value={type}
            items={types}
            handleChange={item => handleChange(item)}
            disabled={isEmpty(types)}
            loading={isEmpty(data)}
          />
        </FlexItem>
      </FlexContainer>
    </>
  )
}

export default Header
