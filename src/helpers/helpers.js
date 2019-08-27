import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'

// eslint-disable-next-line import/prefer-default-export
export const filterData = (data, filters) => {
  let filteredData = data
  if (!isEmpty(filters.type) && !isNull(filters.type)) {
    filteredData = data.filter(i => i.type === filters.type.value)
  }
  if (!isEmpty(filters.brand) && !isNull(filters.brand)) {
    filteredData = data.filter(i => i.brand === filters.brand.value)
  }
  if (!isEmpty(filters.color) && !isNull(filters.color)) {
    filteredData = filteredData.filter(i =>
      i.colors.some(r => filters.color.value.includes(r))
    )
  }
  return filteredData
}
