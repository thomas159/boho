import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LinkNav = styled(NavLink)`
  display:flex;
  height:40px;
  background: inherit;
  color:#fff;
  cursor:pointer;
  text-decoration:none;
  text-transform: capitalize;
  align-items:center;
  justify-content:center;
  padding: 0 10px;
  font-size: 18px;
  &:hover {
    background:#fff;
    color:#90Ba41;
    text-decoration:none;
  }
`

export default LinkNav