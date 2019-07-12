import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as palette from '../../atoms/Variables'
import Button from '../../atoms/Button'
import Img from '../../atoms/Img'
import media from '../../atoms/Media'
import LinkWrap from '../../atoms/LinkWrap'

const Wrap = styled.div`
  display: flex;
  height: 100%;
  border-radius: ${palette.borderRadius};
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const ImgWrap = styled.div`
  position: relative;
`

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  ${media.md`
    height: 360px;
  `}
`

const Title = styled.div`
  padding: 20px 10px ;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  background: #fff;
  color: #fff;
  text-transform: capitalize;
  color: ${palette.textDark};
`

const InfoWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  background: #fff;
  color: #fff;
  text-decoration: none;
  color: ${palette.textDark};
`

const Price = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 20px 0;
  color: ${palette.textDarker};
`

const AddToCart = styled(Button)`
  width: 100%;
  padding: 15px 10px;
  background: #fff;
  border-radius: 0 0 ${palette.borderRadius} ${palette.borderRadius};
  color: #fff;
  font-weight: 700;
  color: ${palette.textDarker};
  border-top: 1px solid #999;
  `

export default class ProductListCard extends React.Component {
  render() {
    const { cat, e, p, id, img, name, price, desc, match, material,slug, type } = this.props
    // expected output: true
    return (
      <Wrap>
        <LinkWrap col to={`/${cat}/${slug}`}>
        <ImgWrap>
          <StyledImg topRound src={`https://bags.life/wp-content/uploads/${img}`} alt={name} />
        </ImgWrap>
          <Title>
            {name}
          </Title>
        </LinkWrap>
          <InfoWrap to={`/${match.params.catId}/${slug}`}>
            <Price>
              {price} €
            </Price>
          </InfoWrap>
        <AddToCart
          className="snipcart-add-item"
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          data-item-url="/"
          data-item-description={desc}>{e && 'Add to Cart'}{p && 'Dodaj do koszyka'}
        </AddToCart>
      </Wrap>
    )
  }
}
