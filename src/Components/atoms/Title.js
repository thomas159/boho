import React from 'react'
import styled from 'styled-components'
import * as palette from '../atoms/Variables'
import Container from '../atoms/Container'

const Wrap = styled.div`

  padding: 5px;
  margin: 20px 0 10px 0;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`

const Text = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`
// const Wrap = styled.div`
//   position: relative;
//   width:100%;
//   border-bottom: 1px solid ${palette.border};
//   margin: 40px 0 20px 0;
// `

// const Text = styled.div`

//   position: absolute;
//   display: flex;
//   align-items: center;
//   font-family: 'Montserrat', sans-serif;
//   top: -20px;
//   left: 50%;
//   -webkit-transform: translateX(-50%);
//   transform: translateX(-50%);
//   height: 40px;
//   background: #fafafa;
//   padding: 10px 20px;
//   text-transform: capitalize;
//   font-size: ${palette.textMedium};
// `

const Title = ({ e, p, eText, pText }) => (
  <Container>
    <Wrap>
      <Text>
        {e && eText}
        {p && pText}
      </Text>
    </Wrap>
  </Container>
)

export default Title
