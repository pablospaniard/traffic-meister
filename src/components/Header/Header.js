import React, { useState, useContext, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'

import { FlexContainer, FlexItem, Select } from '../UI'
import AppContext from '../../helpers/context'
import { PROPS } from '../../helpers/constants'

let arrayOfTypes = []
let arrayOfBrands = []
let arrayOfColors = []

const Header = () => {
  const { data, filters, setFilters } = useContext(AppContext)
  // this could be done with useReducer, but i leave it as is for simplicity
  const [state, setState] = useState({})

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

  const handleChange = (item, prop) => {
    switch (prop) {
      case PROPS.TYPES:
        setFilters({ ...filters, types: item })
        break
      case PROPS.BRANDS:
        setFilters({ ...filters, brands: item })
        break
      case PROPS.COLORS:
        setFilters({ ...filters, colors: item })
        break

      default:
        break
    }
  }

  return (
    <>
      <h1>The Traffic Meister</h1>
      <form>
        <FlexContainer>
          <FlexItem flex="1" margin="0 20px">
            <Select
              value={filters.types}
              items={state.types}
              handleChange={item => handleChange(item, 'types')}
              disabled={isEmpty(state.types)}
              loading={isEmpty(data)}
            />
          </FlexItem>
          <FlexItem flex="1" margin="0 20px">
            <Select
              value={filters.brands}
              items={state.brands}
              handleChange={item => handleChange(item, 'brands')}
              disabled={isEmpty(state.brands)}
              loading={isEmpty(data)}
            />
          </FlexItem>
          <FlexItem flex="1" margin="0 20px">
            <Select
              value={filters.colors}
              items={state.colors}
              handleChange={item => handleChange(item, 'colors')}
              disabled={isEmpty(state.colors)}
              loading={isEmpty(data)}
            />
          </FlexItem>
        </FlexContainer>
      </form>
    </>
  )
}

export default Header
