import React, { useContext } from 'react'
import { GridLoader } from 'react-spinners'
import isEmpty from 'lodash/isEmpty'
import styled from '@emotion/styled'
import capitalize from 'lodash/capitalize'

import { FlexContainer, FlexItem } from '../UI'
import AppContext from '../../helpers/context'

const StyledLoader = styled.div`
  width: fit-content;
  margin: 20px auto;
`

const StyledFlexContainer = styled(FlexContainer)`
  border: 1px solid black;
  width: 50%;
  margin: 5px auto;
  padding: 5px;

  img {
    height: 100%;
    width: 200px;
    min-height: 50px;
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
  const { data } = useContext(AppContext)
  return (
    <>
      {!isEmpty(data) ? (
        data.map(item => (
          <StyledFlexContainer key={item.id} alignItems="center">
            <FlexItem flex="1">{capitalize(item.type)}</FlexItem>
            <FlexItem flex="1">{item.brand}</FlexItem>
            <FlexItem flex="1">
              {item.colors.map(color => (
                <StyledColorDiv color={color} />
              ))}
            </FlexItem>
            <img src={item.img} alt={item.brand} />
          </StyledFlexContainer>
        ))
      ) : (
        <StyledLoader>
          <GridLoader sizeUnit="px" size={10} color="#123abc" loading />
        </StyledLoader>
      )}
    </>
  )
}

export default Main
