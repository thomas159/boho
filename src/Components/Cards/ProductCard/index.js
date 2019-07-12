import React from 'react'
import styled from 'styled-components'
import * as palette from '../../atoms/Variables'
import Button from '../../atoms/Button'
// import Img from '../../atoms/Img'
import media from '../../atoms/Media'
import { ArrowLeft, ArrowRight } from '../../../images'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${media.lg`
    flex-direction: row;
  `}
`

const Half = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  ${media.md`
    padding: 20px 10px;
  `}
  ${media.lg`
    &:nth-child(1) {
      background: #fff;
      padding: 20px 140px;
      flex: 50%;
    }
    &:nth-child(2) {
      background: #EFF2F7;
      flex-direction: column;
      padding: 40px 100px 100px 100px;
      flex: 50%;
    }
  `}
`

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Label = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 10px;
  text-align: center;
`

const Title = styled.div`
  padding: 40px 0 20px 0;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
`

const Price = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  padding: 40px 0 40px 0;
`

const Desc = styled.div`
  padding: 20px 0;
  text-align: center;
  ${media.lg`
  text-align: left;
  `}
`


const AddToCart = styled(Button)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 50px;
  padding: 15px;
  background: ${palette.darkGreen};
  color: #fff;
  font-weight: 700;
  &:active {
    background: ${palette.darkerGreen};
    color: fff;
  }
  ${media.lg`
    border-radius: ${palette.borderRadius};
    position: relative;
    margin: 20px 0 0 0;
  `}
`

const ImgWrap = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  height: 100%;
  width: 100%;
  align-items: center;
  overflow: hidden;
`

const Img = styled.img`
  position: relative;
  width: 100%;
  ${media.lg`
    max-width: 100%;
  `}
`

const Next = styled.svg`
  position: absolute;
  right: -50px;
  top: 50%;
  height: 30px;
  cursor: pointer;
`

const Prev = styled.svg`
  position: absolute;
  left: -50px;
  top: 50%;
  height: 30px;
  cursor: pointer;
`

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    counter: 1,
    currentImageIndex: 0,
    currentIndex: 0,
    images: this.props.images.split(','),
    valid: false,
    showInvalidMessage: false,
    }
  }

  handleNextImage = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  handlePrevImage = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  render() {
    const { id, img, name, price, desc, color, images, showAlert, size } = this.props
    const { counter, selectedImage, selectedSize, showInvalidMessage } = this.state

    const imgArray = this.props.images.split(',')
    return (
      <Wrap>
        <Half>
          <Prev onClick={this.handlePrevImage}><ArrowLeft />hh</Prev>
            <Next onClick={this.handleNextImage}><ArrowRight />hh</Next>
          <ImgWrap>
            <Img src={`https://bags.life/wp-content/uploads/${imgArray[this.state.currentIndex]}`} alt={name} />

          </ImgWrap>
        </Half>
        <Half>
          <InfoWrap>
            <Title>{name}</Title>
            <Desc dangerouslySetInnerHTML={{__html: desc.replace(/\n/g, "<br /><br />")  }}></Desc>
            <Price>{price} €</Price>
          </InfoWrap>

          <AddToCart
              onClick={showAlert}
              className="snipcart-add-item"
              data-item-id={id}
              data-item-name={name}
              data-item-price={price}
              data-item-url="/"
              data-item-description={desc}
            >Add To Cart
          </AddToCart>
        </Half>
      </Wrap>
    )
  }
}

