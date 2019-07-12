import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkWrap = styled(Link)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.col ? 'column' : 'row'};
  text-decoration: none;
  flex: 1;
  color: #fff;
`

export default LinkWrap