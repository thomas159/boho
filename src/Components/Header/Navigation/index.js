import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Container from '../../atoms/Container'
import media from '../../atoms/Media'
import * as palette from '../../atoms/Variables'
import Img from '../../atoms/Img'
import {
  withRouter
} from 'react-router-dom'

const ShowDesktop = styled.div`
  display: none;
  ${media.lg`
    display: flex;
    width: 100%;
    height: 50px;
  `}
`

const ShowMobile = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  ${media.lg`
    display: none;
  `}
`

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

const Cell = styled(NavLink)`
  display: flex;
  flex: 0 0 25%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  color: #B296A9;
  font-family: 'Teko', sans-serif;
  font-size: 20px;
  border-bottom: 3px solid ${palette.menuBlue};
  border-top: 6px solid ${palette.menuBlue};
  &:nth-child(4) {
    border-right: 0px solid ${palette.green};
  }
  ${media.lg`
    font-size: 24px;
    flex: 0 0 auto;
    padding: 10px;
  `}
`

const InnerCell = styled.div`
  border-bottom: 1px solid ${palette.green};
  padding: 10px;
  text-align: center;
  justify-content: center;
`

class Navigation extends React.Component {

  // componentDidUpdate() {
  //   this.props.e && this.props.history.push('/dashboard')
  // }
  render() {
    const { categories, e, p, subCategories } = this.props
    return (
      <Wrap>
        <ShowMobile>

          {categories && categories.map(category =>
          <Cell
            exact
            key={category.id}
            to={e ? `/${category.slug}` : `/${category.slugP}`}
            activeStyle={{ borderBottom: `3px solid #ff00ff`, borderTop: `6px solid ${palette.menuBlue}` }}
          >
            {e && category.name}
            {p && category.nameP}
          </Cell>
          )}
        </ShowMobile>
        <ShowDesktop>

        {categories && categories.map(category =>
        <Cell
          exact
          key={category.id}
          to={e ? `/${category.slug}` : `/${category.slugP}`}
          activeStyle={{ borderBottom: `3px solid #ff00ff`, borderTop: `6px solid ${palette.menuBlue}` }}
        >
          {e && category.name}
          {p && category.nameP}
        </Cell>
        )}
        </ShowDesktop>
      </Wrap>
    )
  }
}

export default withRouter(Navigation)