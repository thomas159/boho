import styled from 'styled-components'
import React from 'react'

const StyledH2 = styled.h2`
  font-size: 24px;
`
const H2 = ({children}) => (
  <StyledH2>{children}</StyledH2>
)

export default H2

// const Link = ({ className, children }) => (
//   <a className={className}>
//     {children}
//   </a>
// );