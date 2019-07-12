import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import media from '../../atoms/Media'
import Button from '../../atoms/Button'
import Overlay from '../../atoms/Overlay'

const Header = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  font-size: 30px;
  z-index: 2;
  color: #fff;
`

const Text = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  font-size: 20px;
  z-index: 2;
`

const Wrap = styled.div`
  position: relative;
  height: 400px;
  background: url(${props => props.bg} );

  background-size: cover;
`

const ShopButton = styled(Button)`
  position: absolute;
  top: 250px;
  left: 0;
  font-size: 20px;
  width: 200px;
  padding: 10px;
  z-index: 2;
`

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
`

const Img = styled.img`

`

const Hero = ({ e, p }) => (
  <Wrap bg={require('../../../images/hero.jpg')}>
    <Overlay />
    <Header>START YOUR SHOPPING TODAY</Header>
    <Text>nkadnsdkadnsksdansdaoknskndsakondsasdno</Text>
    <ShopButton>Shop Now</ShopButton>
  </Wrap>
)

export default Hero