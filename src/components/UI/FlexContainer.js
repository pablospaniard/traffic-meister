import styled from '@emotion/styled'

export default styled.div`
  display: flex;
  flex-flow: ${({ direction }) => direction || 'row'} nowrap;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  box-sizing: border-box;
`
