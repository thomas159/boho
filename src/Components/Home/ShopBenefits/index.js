import React from 'react'
import styled from 'styled-components'
import { Delivery } from '../../../images'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.div`
  flex: 0 0 33%;
  padding: 10px;
`

const CellInner = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  flex-direction: column;
`

const ImgWrap = styled.div`

`

const Img = styled.svg`
  width: 50%;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`

const Text = styled.div`
  padding: 10px;
`

const ShopBenefits = () => (
  <Wrap>
    <Cell>
    100% vegan products
    </Cell>

    <Cell>
      <CellInner>
        <ImgWrap>
          <Img><Delivery /></Img>
        </ImgWrap>
        <Title>Free Delivery</Title>
        <Text>Free delivery on orders over 250PLN</Text>
      </CellInner>
    </Cell>
    <Cell>

    </Cell>

  </Wrap>
)

export default ShopBenefits