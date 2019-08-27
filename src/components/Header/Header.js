import React, { useState, useContext, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'

import { FlexContainer, FlexItem, Select } from '../UI'
import AppContext from '../../helpers/context'

let arrayOfTypes = []
let arrayOfBrands = []
let arrayOfColors = []

const Header = () => {
  const { data } = useContext(AppContext)
  // this could be done with useReducer, but i leave it as is for simplicity
  const [state, setState] = useState({})
  const [type, setType] = useState('')
  // const [brands, setBrands] = useState({})
  // const [brand, setBrand] = useState('')
  // const [colors, setColors] = useState({})
  // const [color, setColor] = useState('')

  useEffect(() => {
    if (!isEmpty(data)) {
      arrayOfTypes = data.map(i => i.type)
      const uniqueTypes = Array.from(new Set(arrayOfTypes))
      arrayOfBrands = data.map(i => i.brand)
      const uniqueBrands = Array.from(new Set(arrayOfBrands))
      arrayOfColors = data.reduce((prev, curr) => [...prev, ...curr.colors], [])
      const uniqueColors = Array.from(new Set(arrayOfColors))
      setState({
        ...state,
        types: uniqueTypes,
        brands: uniqueBrands,
        colors: uniqueColors
      })
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
            items={state.types}
            handleChange={item => handleChange(item)}
            disabled={isEmpty(state.types)}
            loading={isEmpty(data)}
          />
        </FlexItem>
        <FlexItem>
          <Select
            value={type}
            items={state.brands}
            handleChange={item => handleChange(item)}
            disabled={isEmpty(state.brands)}
            loading={isEmpty(data)}
          />
        </FlexItem>
        <FlexItem>
          <Select
            value={type}
            items={state.colors}
            handleChange={item => handleChange(item)}
            disabled={isEmpty(state.colors)}
            loading={isEmpty(data)}
          />
        </FlexItem>
      </FlexContainer>
    </>
  )
}

export default Header
