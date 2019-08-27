import React from 'react'
import { string, func, arrayOf, object, oneOfType, bool } from 'prop-types'
import Select from 'react-select'
import isEmpty from 'lodash/isEmpty'

const SelectComponent = ({ value, handleChange, items, disabled, loading }) => {
  const objects = !isEmpty(items)
    ? items.map(i => {
        return { label: i.toLowerCase(), value: i }
      })
    : {}
  return (
    <Select
      value={value}
      onChange={handleChange}
      options={objects}
      isClearable
      isMulti
      isDisabled={disabled}
      isLoading={loading}
    />
  )
}

SelectComponent.propTypes = {
  disabled: bool.isRequired,
  loading: bool.isRequired,
  value: oneOfType([string, arrayOf(object)]),
  items: oneOfType([arrayOf(string), arrayOf(object)]),
  handleChange: func
}

SelectComponent.defaultProps = {
  handleChange: () => {},
  items: [],
  value: []
}

export default SelectComponent
