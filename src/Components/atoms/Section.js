import styled from 'styled-components'

const Section = styled.section`
  width:100%;
  height:auto;
  background: ${props => props.bg};
  padding: ${props => props.padding};
`

export default Section
