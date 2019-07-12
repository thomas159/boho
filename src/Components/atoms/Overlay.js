import styled from 'styled-components'
import * as palette from './Variables'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 1;
  border-radius: ${palette.borderRadius};
`

export default Overlay