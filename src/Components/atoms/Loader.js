import React from 'react'
import styled,{keyframes} from 'styled-components'

const bounce = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

export const Child = styled.div`
  border-radius: 100%;
  animation: ${bounce} 1.4s ease-in-out ${p => p.delay}s infinite both;
`

export const StyledThreeBounce = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 5px;
  text-align: center;
  border-radius: 100%;
  > ${Child} {
   font-size: 18px;
    background: #ff00ff;
    width: 20px;
    height: 20px;
  }
`


const Loader = () => (
  <StyledThreeBounce>
  <Child delay={-0.32} />
  <Child delay={-0.16} />
  <Child delay={0} />
  </StyledThreeBounce>
)

export default Loader
