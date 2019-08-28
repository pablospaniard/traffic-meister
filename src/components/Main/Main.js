import React, { useContext } from 'react'
import { GridLoader } from 'react-spinners'
import isEmpty from 'lodash/isEmpty'
import styled from '@emotion/styled'

import { FlexContainer, FlexItem, Image } from '../UI'
import AppContext from '../../helpers/context'

const StyledLoader = styled.div`
  width: fit-content;
  margin: 20px auto;
`

const StyledFlexContainer = styled(FlexContainer)`
  border: 1px solid #ccc;
  width: 50%;
  margin: 5px auto;
  padding: 15px;
  border-radius: 4px;
  background-color: #607b7d;
  color: #e0e0e0;

  img {
    height: 100%;
    width: 200px;
    min-height: 50px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const StyledColorDiv = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 0 5px;
  background-color: ${({ color }) => color || 'inherit'};
  border: 1px solid #ccc;
`

const Main = () => {
  const { data, filteredData } = useContext(AppContext)

  return (
    <>
      {!isEmpty(data) ? (
        filteredData.map(item => (
          <StyledFlexContainer
            key={item.id}
            alignItems="center"
            data-testid="table"
          >
            <FlexItem flex="1">{item.type.toUpperCase()}</FlexItem>
            <FlexItem flex="1">{item.brand}</FlexItem>
            <FlexItem flex="1">
              {item.colors.map(color => (
                <StyledColorDiv key={color} color={color} />
              ))}
            </FlexItem>
            <Image src={item.img} alt={item.brand} />
          </StyledFlexContainer>
        ))
      ) : (
        <StyledLoader data-testid="loading">
          <GridLoader sizeUnit="px" size={10} color="#ccc" loading />
        </StyledLoader>
      )}
    </>
  )
}

export default Main
