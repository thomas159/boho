import React from 'react'
import styled from 'styled-components'
import Img from '../../atoms/Img'
import LinkWrap from '../../atoms/LinkWrap'

const Wrap = styled.div`
  position: relative;
  width: 100%;
`

const Text = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;
  font-size: 20px;
  z-index: 2;
`

const SubCatCard = ({ e, p, img, match, name, nameP, slug }) => (
  <LinkWrap to={`/${match.params.catId}/${slug}`}>
    <Img overlay src={img} />
    <Text>
      {e && name}
      {p && nameP}
    </Text>
  </LinkWrap>
)

export default SubCatCard