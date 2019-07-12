import styled from 'styled-components'
import React from 'react'
import { string } from 'prop-types'
import Loader from '../atoms/Loader'
import * as palette from '../atoms/Variables'
import media from '../atoms/Media'

const Div = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  padding: ${props => props.padding && '10px'};
  background: ${props => props.padding && '#fff'};
  border-radius: ${props => props.topRound ? `${palette.borderRadius} ${palette.borderRadius} 0 0` : `${palette.borderRadius}`};
`

const StyledImg = styled.img`
  position: relative;
  object-fit: contain;
  max-width: 100%;
  border-radius: ${props => props.topRound ? `${palette.borderRadius} ${palette.borderRadius} 0 0` : `${palette.borderRadius}`};
  ${media.lg`
    max-height: 100%;
    max-width: auto;
  `}
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  max-height: 100%;
  width: auto;
  height: auto;
`

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

export default class Img extends React.Component {
  state = {
    loading: true,
  }

  handleLoaded = () => {
    this.setState({ loading: false })
  }

  render() {
    const { onClick, overlay, padding, topRound } = this.props
    return(
      <Div
        onClick={onClick}
        padding={padding}
        topRound={topRound}
      >
        {this.state.loading ? <Loading><Loader /></Loading> : null}
        {overlay && <Overlay />}
        <StyledImg onLoad={this.handleLoaded} src={`https://bags.life/wp-content/uploads/${this.props.src}`} />
      </Div>
    )
  }

}

// const LoadedState = StateProvider(false);
// const ImageWithLoading = ({ src }) => (
//   <LoadedState>
//     {({ state: loaded, setState: setLoaded }) => (
//       <div>
//         {!loaded ? (
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
//           </svg>
//         ) : null}
//         <img
//           src={src}
//           style={!loaded ? { visibility: 'hidden' } : {}}
//           onLoad={() => setLoaded(true)}
//         />
//       </div>
//     )}
//   </LoadedState>
// );