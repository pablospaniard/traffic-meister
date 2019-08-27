import isEmpty from 'lodash/isEmpty'

// eslint-disable-next-line import/prefer-default-export
export const filterData = (data, filters) => {
  const filteredData = isEmpty(filters) ? data : []
  const appliedTypes = !isEmpty(filters.types)
    ? filters.types.map(t => t.value)
    : []
  const appliedBrands = !isEmpty(filters.brands)
    ? filters.brands.map(t => t.value)
    : []
  const appliedColors = !isEmpty(filters.colors)
    ? filters.colors.map(t => t.value)
    : []
  data.forEach(item => {
    const values = Object.values(item)
    if (
      values.some(i => appliedTypes.includes(i) || appliedBrands.includes(i)) ||
      item.colors.some(c => appliedColors.includes(c))
    ) {
      filteredData.push(item)
    }
  })
  return filteredData
}
