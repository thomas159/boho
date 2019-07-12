import React from 'react'
import styled from 'styled-components'
import media from './Media'
import * as palette from './Variables'

const Background = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  padding: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  ${media.lg`
    padding: 50px;
  `}
`

const Wrap = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 101;
  overflow-y: scroll;
  ${media.lg`
  border-radius: ${palette.borderRadius};
  `}
`

export default class Modal extends React.Component {

  render() {
    const { show } = this.props
    return (
      <Background>
        <Wrap>
          {this.props.children}
          <div onClick={show}>close</div>
        </Wrap>
      </Background>
    )
  }
}

// const Background = styled.div`
//   position: fixed;
//   display: flex;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0,0,0,0.3);
//   padding: 50px;
//   z-index: 9999;
//   align-items: center;
//   justify-content: center;
// `

// const Wrap = styled.div`
//   position: relative;
//   background: #fff;
//   border-radius: 5px;
//   width: 500px;
//   padding: 30px;
//   z-index: 101;
// `