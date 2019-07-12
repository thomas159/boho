import React from 'react'
import styled from 'styled-components'
import LinkWrap from '../../atoms/LinkWrap'
import Img from '../../atoms/Img'
import * as palette from '../../atoms/Variables'
import Product from '../../Product';

const ImgWrap = styled.div`
  position: relative;
  border-radius: 5px;
  background: #fff;
`

const Price = styled.div`
  position: relative;
  font-weight: 400;
  background: #fff;
  color: ${palette.green};
  text-transform: capitalize;
  font-size: 20px;
  padding: 10px;
  border-radius: 0 0 ${palette.borderRadius} ${palette.borderRadius};
`

const Text = styled.div`
  position: relative;
  font-weight: 400;
  background: #fff;
  color: ${palette.green};
  text-transform: capitalize;
  font-size: 20px;
  padding: 10px;

`

const HomeProductCard = ({ cat, categories, desc, img, name, price, slug  }) => (
  <LinkWrap to={`${categories[0].name}/${cat}/${slug}`}>
  {/* <LinkWrap to="/"> */}
    <ImgWrap>
    <Img padding src={img} />
    </ImgWrap>
    <Text>{name}</Text>
    <Price>{price} PLN</Price>
  </LinkWrap>
)

export default HomeProductCard