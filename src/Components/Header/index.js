import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as palette from '../atoms/Variables'
import media from '../atoms/Media'
import Navigation from './Navigation'
import Language from './Language'
import { Cart } from '../../images'
import { BADFLAGS } from 'dns';

const ShowDesktop = styled.div`
  display: none;
  ${media.lg`
    display: block;
    width: 100%;
    height: 50px;
    background: ${palette.menuBlue};
  `}
`

const Container = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
`

const ShowMobile = styled.div`
  display: block;
  ${media.lg`
    display: none;
  `}
`

const Wrap = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  height: 80px;
  width: 100%;
  flex-direction: column;
  z-index: 5;
  ${media.lg`
    height: 50px;
  `}
`

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
`

const Bottom = styled.div`
  background: ${palette.menuBlue};
`

const Spacer = styled.div`
  height: 100px;
  ${media.lg`
    height: 50px;
  `}
`

const Cell = styled.div`
  display: flex;
  &:nth-child(1) {
    flex: 0 0 30%;
    padding: 10px;
    ${media.lg`
    flex: 0 0 30%;
    `}
  }
  &:nth-child(2) {
    flex: 0 0 40%;
    background: ;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: ${palette.green};
    ${media.lg`
      height: 49px;
      flex: 0 0 40%;
    `}
  }
  &:nth-child(3) {
    flex: 0 0 30%;
    padding: 10px;
    justify-content: flex-end;
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  color: ${palette.green};
`

const CartWrap = styled.div`
  position: relative;
  margin-right: 5px;
`

const CartInnerWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const CartItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  top: -2px;
  left: 10px;
  width: 15px;
  height: 15px;
  background: ${palette.green};
  border-radius: 100%;
  color: #fff;
`

const SvgWrap = styled.svg`
  position: relative;
  width: 30px;
  height: 30px;
`

const TotalCost = styled.div`
  margin-right: 10px;
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
`

export default class Header extends React.Component {
  state = {
    showMenu: false,
  }

  handleShowMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {
    const { categories, e, p , subCategories } = this.props

    const cartSummary = (
      <a href="#" className="snipcart-checkout">
        <CartWrap>
          <CartInnerWrap>
          <SvgWrap><Cart /></SvgWrap>
          <CartItems><div className="snipcart-summary"><span className="snipcart-total-items"></span></div></CartItems>
          </CartInnerWrap>
        </CartWrap>
      </a>
   )

    return (
      <div>
        <Spacer />
        <Wrap>
          <ShowMobile>
            <Top>
              <Cell>
                {cartSummary}
              </Cell>
              <Cell>
                <Logo to="/">Logo</Logo>
              </Cell>
              <Cell>
                <Language />
              </Cell>
            </Top>
            <Bottom>
              <Navigation e={e} p={p} categories={categories} subCategories={subCategories} />
            </Bottom>
          </ShowMobile>
          {/* Show Desktop */}
          <ShowDesktop>
            <Container>
              <Cell>

              </Cell>
              <Cell><Navigation e={e} p={p} categories={categories} subCategories={subCategories} /></Cell>
              <Cell>
                {cartSummary}
                <TotalCost>
                  <div className="snipcart-summary">
                <span className="snipcart-total-price"></span>
                  </div>
                </TotalCost>
                <Language />
              </Cell>
            </Container>
          </ShowDesktop>
        </Wrap>
      </div>
    )
  }
}
