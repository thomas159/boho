import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import media from '../../atoms/Media'
import Overlay from '../../atoms/Overlay'
// import HomeCatCard from '../../Cards/HomeCatCard'
import * as palette from '../../atoms/Variables'
import LinkWrap from '../../atoms/LinkWrap'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Cell = styled.div`
  position: relative;
  flex: 0 0 50%;
  padding: 1px;
  ${media.lg`
    flex: 0 0 33.333%;
  `}
`

const Img = styled.img`

  width: 100%;
  height: 100%;
`



const Text  = styled.div`
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  z-index: 2;
`
const Categories = ({ e, p, addType }) => (
    <Wrap>
     <Cell>
       <LinkWrap to="/bags" onClick={()=> addType('crossbody')}>
          <Img src={require('../../../images/crossbody.jpg')} />

          <Overlay />
          <Text>Crossbody</Text>
        </LinkWrap>
     </Cell>
     <Cell>
      <LinkWrap to="/bags" onClick={()=> addType('hobo')}>
        <Img src={require('../../../images/hobo.jpg')} />
        <Text>Hobo</Text>
        <Overlay />
        </LinkWrap>
     </Cell>
     <Cell>
      <LinkWrap to="/bags" onClick={()=> addType('shoulder')}>
        <Img src={require('../../../images/shoulder.jpg')} />
        <Text>Shoulder</Text>
        <Overlay />
      </LinkWrap>
     </Cell>
    </Wrap>
)

export default Categories