import React from 'react'
import styled from 'styled-components'
import * as palette from '../atoms/Variables'
import media from '../atoms/Media'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.1);
  padding: 0 20px 40px 20px;
  z-index: 10;

`

const InnerWrap = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  display: flex;
  background: #282828;
  color: #fff;
  border-radius: ${palette.borderRadius};
  ${media.lg`
  padding: 40px 100px;
  `}
`

export default class Alert extends React.Component {
  render() {
    return(
      <Wrap>
        <InnerWrap>Product has been added to Cart</InnerWrap>
      </Wrap>
    )
  }
}
